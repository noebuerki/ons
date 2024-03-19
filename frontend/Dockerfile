# Base image
FROM node:18-alpine AS build

# Set workdir
WORKDIR /app

# Copy remaining code
COPY . /app

# Install dependecies
RUN npm install

# Build project
RUN npm run build

# Create Nginx image
FROM nginx:1.25-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /app/serve-folder
