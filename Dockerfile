FROM python:3.9

# Установка системных зависимостей
RUN apt-get update && \
    apt-get install -y \
    build-essential \
    libgirepository1.0-dev \
    gobject-introspection \
    libgdk-pixbuf2.0-dev \
    libcairo2-dev \
    pkg-config \
    cmake \
    libcups2-dev  # Добавлено для pycups

# Установка рабочей директории
WORKDIR /app

# Копирование файлов зависимостей
COPY requirements.txt .

# Установка зависимостей Python
RUN pip install --upgrade pip setuptools wheel
RUN pip install --no-cache-dir -r requirements.txt

# Копирование всех файлов проекта
COPY . .

# Открытие порта для бэкенда
EXPOSE 8000

# Команда для запуска вашего приложения
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
