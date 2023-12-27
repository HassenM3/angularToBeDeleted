# Use an official Node runtime as a base image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire application to the working directory
COPY . .

# Build the Angular app
RUN npm run build --prod

# Expose the port the app runs on
EXPOSE 4200

# Start the application
CMD ["npm", "start"]

