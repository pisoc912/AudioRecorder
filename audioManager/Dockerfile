FROM python:3.9.13

WORKDIR /app

COPY requirements.txt /app/

RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

EXPOSE 8000

ENV DJANGO_SETTINGS_MODULE=audioManager.settings

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
