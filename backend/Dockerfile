# Base image
FROM python:3.11-slim-bullseye

# Set workdir
WORKDIR /app

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install system dependencies
RUN apt-get update && apt-get install -y netcat

# Copy entire project
COPY ./backend ./
COPY ./manage.py ./

# Install pip
RUN python -m pip install --upgrade pip

# Install all dependencies
RUN python -m pip install -r backend/requirements/requirements.txt

# Port where the Django app runs
EXPOSE 8000

# Run entrypoint

ENTRYPOINT [ "sh", "-c", "/app/backend/entrypoint.sh" ]