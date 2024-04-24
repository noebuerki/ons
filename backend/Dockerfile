# Base image
FROM python:3.11-alpine

# Update and upgrade apk
RUN apk update && apk upgrade

# Install gcc
RUN apk add --no-cache gcc musl-dev libffi-dev && rm -rf /var/cache/apk/*

# Create workdir
RUN mkdir -p /app/backend

# Set workdir
WORKDIR /app/backend

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1


# Copy entire project
COPY . .

# Install pip
RUN python -m pip install --upgrade pip

# Install all dependencies
RUN python -m pip install -r requirements/requirements.txt

# Port where the Django app runs
EXPOSE 8000

RUN python manage.py collectstatic --noinput

# Run entrypoint
CMD echo "Apply database migrations" && python manage.py migrate --noinput && daphne -b 0.0.0.0 -p 8000 asgi:application