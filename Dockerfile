# Base Image
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Copy HTML, CSS, and JavaScript files to the container
COPY *.html .
COPY ./css/*.css css/
COPY ./js/*.js js/
#EXPOSE a port 

EXPOSE 80
