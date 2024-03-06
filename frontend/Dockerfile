# Base image
FROM node:18-alpine AS build

# Create workdir
RUN mkdir -p /home/ons/frontend

# Set workdir
WORKDIR /home/ons/frontend

# Copy package.json & package-lock.json
COPY package.json $DockerHome
COPY package-lock.json $DockerHome

# Install dependecies
RUN npm install

# Copy remaining code
COPY . $DockerHome

# Build project
RUN npm run build

# Create Nginx image
FROM nginx:1.25-alpine
COPY --from=build /home/ons/frontend/build /usr/share/nginx/html
