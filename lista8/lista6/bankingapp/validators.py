from rest_framework import serializers


class PositiveValueValidator(object):

    def __call__(self, value):
        if value < 0:
            message = 'Value has to be at least non negative'
            raise serializers.ValidationError(message)

class ClientExistValidator(object):

    def __init__(self, account_numbers):
        self.account_numbers = account_numbers

    def __call__(self, account_number):
        if account_number not in self.account_numbers:
            message = 'Such client does not exist'
            raise serializers.ValidationError(message)
