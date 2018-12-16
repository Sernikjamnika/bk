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
from .serializers import UserSerializer, TransferSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response



# Create your views here.
@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        if not request.user.is_authenticated:
            print(request.user)
            serializer = UserSerializer(data=request.data)
            if serializer.is_valid():
                user = serializer.save()
                account_number = User.objects.make_random_password(26, '1234567890')
                client = Client(user=user,
                                account_number=account_number)
                client.save()
                return Response(data={'account_number': account_number}, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['POST'])
def create_transfer(request):
    print(request.data)
    if request.method == 'POST':
        serializer = TransferSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['POST'])
def transfer_confirm(request):
    sender = Client.objects.filter(user=request.user)[0]
    last_transfer = get_object_or_404(Transfer, sender=sender, accepted=False)
    print(request.data)
    if request.method == 'POST' and 'accepted' in request.data:
        if request.data['accepted'] == 0:
            last_transfer.delete()
        else:
            if request.POST['receiver'] == last_transfer.receiver.account_number and \
               request.POST['amount'] == last_transfer.amount:
                last_transfer.accepted=True
                last_transfer.save()
                return Response(status=status.HTTP_202_ACCEPTED)
            else:
                last_transfer.delete()
        return Response(status=status.HTTP_200_OK, data={"message": "Transfer was not accpeted"})
    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['GET'])
def transfer_history(request):
    if request.method == 'GET':
        client = Client.objects.filter(user=request.user)[:1]
        transfers = Transfer.objects.filter(sender=client, accepted=True).select_related('receiver').order_by('-date')
        data = [TransferSerializer(transfer).data for transfer in transfers]
        return Response(status=status.HTTP_200_OK, data=data)
    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

