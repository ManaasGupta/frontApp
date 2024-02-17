# Use a lightweight web server as the base image
FROM nginx:alpine

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Copy all HTML files from the local directory into the container
COPY ./*.html ./

# Copy all CSS files from the css folder into the container
COPY ./css/*.css ./css/

# Copy all JavaScript files from the js folder into the container
COPY ./js/*.js ./js/

# Remove the default NGINX welcome page
RUN rm -f /usr/share/nginx/html/index.html

# Expose port 80 to allow external access
EXPOSE 80

# The default command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]
