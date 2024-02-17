# Use a lightweight web server as the base image
FROM nginx:alpine

# Set the working directory in the container
WORKDIR /usr/frontend

# Copy the HTML, CSS, and JavaScript files into the container
COPY . /usr/frontend/

# Expose port 80 to allow external access
EXPOSE 80

# The default command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]
