from django.db import models
from django.contrib.auth.models import User
from django.db import IntegrityError


# Create your models here.
class Client(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    account_number = models.CharField(max_length=26)


class Transfer(models.Model):
    accepted = models.BooleanField(default=False)
    amount = models.FloatField()
    sender = models.ForeignKey(Client, on_delete=models.DO_NOTHING, related_name='sent')
    receiver = models.ForeignKey(Client, on_delete=models.DO_NOTHING, related_name='received')
    title = models.CharField(max_length=60, default="", null=False)
    date = models.DateTimeField(auto_now_add=True)

    def __eq__(self, other_transfer):
        print(other_transfer.__dict__)



    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None):
        print('IN SAVE METHOD - MODEL')
        if self.sender.account_number == self.receiver.account_number or self.amount < 0: 
            raise IntegrityError()
        return super().save()




