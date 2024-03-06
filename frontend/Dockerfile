# Base image
FROM node:18-alpine AS build

# Set workdir variable
ENV DockerHome=/home/ons/webapp

# Create workdir
RUN mkdir -p $DockerHome

# Set workdir
WORKDIR $DockerHome

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
COPY --from=build $DockerHome/build /usr/share/nginx/html
