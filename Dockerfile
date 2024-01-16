# Use an official Node.js runtime as a base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Vue.js application
RUN npm run build

# Expose the port that the application will run on
EXPOSE 4173

# Define the command to run the application when the container starts
CMD ["npm", "run", "dev"]