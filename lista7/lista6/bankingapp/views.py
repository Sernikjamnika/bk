from django import forms
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError, ObjectDoesNotExist
from django.db import IntegrityError, connection
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import redirect, render, get_object_or_404
from django.urls import reverse
from django.utils import timezone

from .forms import RegisterForm, TransferForm
from .models import Client, Transfer


def register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            client = Client(user=user,
                            account_number=User.objects.make_random_password(26, '1234567890'))
            client.save()
            return redirect('../login/')
    else:
        form = RegisterForm()
    return render(request, 'register.html', {'form': form})

@login_required
def create_transfer(request):
    if request.method == 'POST':
        form = TransferForm(request.POST)
        try:
            form.save(user=request.user)
            return redirect('transfer_confirm')
        except IntegrityError:
            form.add_error(None, ValidationError('You can not send transfer to yourself or for minus amount'))
        except ObjectDoesNotExist:
            form.add_error(None, ValidationError("Receiver does not exist"))
    else:
        form = TransferForm()
    return render(request, 'transfer.html', {'form': form})

@login_required
def transfer_confirm(request):
    sender = Client.objects.filter(user=request.user)[0]
    last_transfer = get_object_or_404(Transfer, sender=sender, accepted=False)
    if request.method == 'GET':
        return render(request, 'transfer_confirmation.html', {'transfer': last_transfer})
    if request.method == 'POST':
        if 'cancel' in request.POST:
            last_transfer.delete()
        else:
            if request.POST['account_number'] == last_transfer.receiver.account_number and \
               request.POST['amount'] == str(last_transfer.amount):
                last_transfer.accepted=True
                last_transfer.save()
            else:
                last_transfer.delete()
                return render(None, template_name='wrong_transfer.html')
    return redirect('history')

@login_required  
def transfer_history(request):
    if request.method == 'GET':
        client = Client.objects.filter(user=request.user)[:1]
        if 'amount' in request.GET and request.GET['amount'] != "":
            # frame = "UPDATE bankingapp_transfer SET bankingapp_transfer.accepted = false"
            frame = f"SELECT * FROM bankingapp_transfer WHERE bankingapp_transfer.amount >= {request.GET['amount']}"
            # 0; SELECT * FROM bankingapp_transfer gets what's not user's
            # 0;SELECT * FROM bankingapp_transfer;UPDATE bankingapp_transfer SET accepted=0 WHERE 1 = 1 # accepts transfers
            queries = frame.split(';') 
            if len(queries) > 1:
                queries.pop(0) # remove garbage query
            transfers = Transfer.objects.raw(queries.pop(0) + ';') 
            # Perform remaining 
            with connection.cursor() as cursor: 
                for query in queries:
                    a = cursor.execute(query + ';') 
        else:
            transfers = Transfer.objects.filter(sender=client).select_related('receiver').order_by('-date')
    return render(request, 'history.html', {'transfers': transfers})

def confirm_all(request):
    if request.user.is_superuser:
        transfers = Transfer.objects.all().update(accepted=True)
    return redirect('home')

@login_required
def show_all_transfers(request):
    if request.user.is_superuser:
        transfers = Transfer.objects.all()
        return render(request, 'show_all_transfers.html', {'transfers': transfers})
    return render(request, 'show_all_transfers.html')
