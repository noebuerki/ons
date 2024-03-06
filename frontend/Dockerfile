# Base image
FROM node:18-alpine AS build

# Create workdir
RUN mkdir -p /home/ons/webapp

# Set workdir
WORKDIR /home/ons/webapp

# Copy package.json & package-lock.json
COPY package.json $DockerHome
COPY package-lock.json $DockerHome

# Install dependecies
RUN npm install

# Copy remaining code
COPY . /home/ons/webapp

# Build project
RUN npm run build

# Create Nginx image
FROM nginx:1.25-alpine
COPY --from=build /home/ons/webapp/build /usr/share/nginx/html
