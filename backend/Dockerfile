# Base image
FROM python:3.11-slim-bullseye

# Set workdir
WORKDIR /app/backend

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install system dependencies
RUN apt-get update && apt-get install -y netcat

# Copy entire project
COPY . .

# Install pip
RUN python -m pip install --upgrade pip

# Install all dependencies
RUN python -m pip install -r requirements/requirements.txt

# Port where the Django app runs
EXPOSE 8000

# Run entrypoint

ENTRYPOINT [ "sh", "-c", "/app/backend/entrypoint.sh" ]