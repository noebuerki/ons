# Base image
FROM node:18-alpine AS build

# Set workdir
WORKDIR /app

# Copy remaining code
COPY . .

# Install dependecies
RUN npm install

# Build project
RUN npm run build

# Create Nginx image
FROM nginx:alpine-perl

COPY .docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY .docker/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /app/frontend