# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Install PM2 globally
RUN npm install -g pm2

# Expose the application port (replace 3000 with your Express app's port if different)
EXPOSE 5000

# Start the application with PM2
CMD ["pm2-runtime", "start", "index.js"]
