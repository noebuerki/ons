# Base image
FROM python:3.11-alpine,

# Set workdir variable
ENV DockerHome=/home/ons/backend

# Create workdir
RUN mkdir -p $DockerHome

# Set workdir
WORKDIR $DockerHome

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install pip
RUN pip install --upgrade pip

# Copy entire project
COPY . $DockerHome

# Install all dependencies
RUN pip install -r requirements/requirements.txt

# Port where the Django app runs
EXPOSE 8000

# Start server
CMD python manage.py runserver