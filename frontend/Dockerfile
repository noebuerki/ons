# Base image
FROM node:18-alpine AS build

# Set env var
ENV WorkDir=/home/ons/webapp

# Create workdir
RUN mkdir -p $WorkDir

# Set workdir
WORKDIR $WorkDir

# Copy package.json & package-lock.json
COPY package.json $WorkDir
COPY package-lock.json $WorkDir

# Install dependecies
RUN npm install

# Copy remaining code
COPY . $WorkDir

# Build project
RUN npm run build

# Create Nginx image
FROM nginx:1.25-alpine
COPY --from=build /home/ons/webapp/build /usr/share/nginx/html
