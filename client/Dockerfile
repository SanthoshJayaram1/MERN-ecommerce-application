# # Use an official Node.js runtime as a parent image
# FROM node:18-alpine AS build

# # Set working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application
# COPY . .

# # Build the application
# RUN npm run build

# Use Nginx as the final image
FROM nginx:latest

# Copy the custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Copy the built files from the build stage to Nginx's HTML directory
# COPY --from=build /app/dist /usr/share/nginx/html
# Copy the build directory from your local machine to Nginx's HTML directory in the container
COPY build/ /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80