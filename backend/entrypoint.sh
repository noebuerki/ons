#!/bin/bash

if [ "$DATABASE" = "phi" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi


python manage.py collectstatic --noinput

python manage.py migrate --noinput

daphne -b 0.0.0.0 -p 8000 asgi:application
