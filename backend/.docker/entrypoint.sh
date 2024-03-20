#!/bin/sh

# Apply database migrations
echo "Apply database migrations"

python manage.py migrate --noinput

daphne -b 0.0.0.0 -p 8000 asgi:application