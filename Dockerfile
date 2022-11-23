# base image
FROM node:14-alpine3.12

# Create app dir inside contaianer
WORKDIR /usr/src/app

# Install app dependencies
# Using wildcard * to ensure both package.json and package-lock.json are copied
# copying packages first helps take advantage of docker layers
COPY package*.json ./

# If you are building your code for production use
# RUN npm ci --only=production
RUN npm install

# Bundle app source
COPY . .

# Make this port accessible from outside the container
EXPOSE 8080

# Command to run when conatinner is ready to run
# Separate arguments
CMD ["npm", "run", "start"]

