from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist, ValidationError
from .models import Transfer, Client
# from BankTransfer.models import PendingTransfer


class RegisterForm(UserCreationForm):
    first_name = forms.CharField(max_length=100, required=True)
    last_name = forms.CharField(max_length=100, required=True)
    email = forms.EmailField()
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password1', 'password2', )


class TransferForm(forms.ModelForm):
    account_number = forms.CharField()
    class Meta:
        model = Transfer
        fields = ['title', 'amount']

    def save(self, user, commit=True):
        # get the instance so we can add the user to it.
        transfer = super(TransferForm, self).save(commit=False)
        print('IN SAVE METHOD')
        print(self.cleaned_data['account_number'])
        receiver = Client.objects.filter(account_number=self.cleaned_data['account_number'])
        if len(receiver) == 0:
            raise ObjectDoesNotExist
        else:
            transfer.receiver = receiver[0]
        transfer.sender = Client.objects.filter(user=user)[0]

        if commit:
            transfer.save()
            self.save_m2m()
        return transfer