from .settings import *
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = 'django-insecure-nd3h6hk0%z9nm!+(^v(b=hoebq0e&9-je^bfucm!t8ezi#w0jt'

DEBUG = True

ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

TELEGRAM_BOT_TOKEN = '6596214157:AAF-OczvE-tUaQGO66DnOJIHg0TKdL7l7v4'

CORS_ORIGIN_ALLOW_ALL = True
