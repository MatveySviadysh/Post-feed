from django import forms
from django.contrib import admin
from .models import Notification
from .utils import get_users

class NotificationForm(forms.ModelForm):
    user_id = forms.ChoiceField(choices=[(user['id'], user['username']) for user in get_users()])

    class Meta:
        model = Notification
        fields = '__all__'

@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    form = NotificationForm
    list_display = ('subject', 'user_id', 'sent_at', 'read')
    search_fields = ('subject', 'body')
    list_filter = ('sent_at', 'read')
