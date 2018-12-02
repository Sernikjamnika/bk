from django import forms
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError, ObjectDoesNotExist
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import redirect, render, get_object_or_404
from django.urls import reverse
from django.utils import timezone

from .forms import RegisterForm, TransferForm
from .models import Client, Transfer


# Create your views here.
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
        if form.is_valid():
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
        transfers = Transfer.objects.filter(sender=client, accepted=True).select_related('receiver').order_by('-date')
        print(Transfer.objects.filter(sender=client).select_related('receiver').order_by('-date').query)
    return render(request, 'history.html', {'transfers': transfers})

