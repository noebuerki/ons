# Set workdir variable
ENV DockerHome=/home/ons/webapp

# Base image
FROM node:18-alpine AS build

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

RUN ls -al

# Create Nginx image
FROM nginx:1.25-alpine
COPY --from=build $DockerHome/build /usr/share/nginx/html
