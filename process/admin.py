from django.contrib import admin
from .models import Message

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('recipient', 'subject', 'sent_at', 'read')
    list_filter = ('read', 'sent_at')
    search_fields = ('recipient__username', 'subject', 'body')
    fields = ('recipient', 'subject', 'body')  # Поля, которые будут доступны для редактирования
