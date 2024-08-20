from __future__ import absolute_import, unicode_literals
import os
from celery import Celery

# Устанавливаем переменную окружения для настроек Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shatl.settings')

app = Celery('shatl')

# Используйте строку конфигурации Celery
app.config_from_object('django.conf:settings', namespace='CELERY')

# Загружаем задачи из приложений Django
app.autodiscover_tasks()
