from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User
from .models import Transfer, Client
from .validators import PositiveValueValidator, ClientExistValidator

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )
    username = serializers.CharField(
            validators=[UniqueValidator(queryset=User.objects.all())]
            )
    password = serializers.CharField(min_length=8,
                                     style={'input_type': 'password'})
    first_name = serializers.CharField()
    last_name = serializers.CharField()

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'],
             validated_data['password'], first_name=validated_data['first_name'], last_name=validated_data['last_name'])
        return user

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'first_name', 'last_name')

class TransferSerializer(serializers.ModelSerializer):
    amount = serializers.FloatField(required=True, validators=[PositiveValueValidator()])
    sender = serializers.CharField(required=True)
    receiver = serializers.CharField(required=True, validators=[ClientExistValidator(Client.objects.values_list("account_number", flat=True))])
    title = serializers.CharField(required=True, max_length=60)

    def create(self, validated_data):
        transfer = Transfer(amount = validated_data['amount'], 
                            sender = Client.objects.get(account_number = validated_data['sender']),
                            receiver =  Client.objects.get(account_number = validated_data['receiver']),
                            title = validated_data['title'])
        transfer.save()                         
        return transfer

    class Meta:
        model = Transfer
        fields = ('amount', 'sender', 'receiver', 'title')