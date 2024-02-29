# Base Image
FROM nginx:alpine

#Adding Meta Data
LABEL author="Manas Gupta"
LABEL Date="29/02/2024"
LABEL GitHub Username="ManaasGupta"
LABEL RepoLink="https://github.com/ManaasGupta/frontapp"
LABEL RepoType="public"

# Set working directory
WORKDIR /usr/share/nginx/html

# Copy HTML, CSS, and JavaScript files to the container
COPY *.html .
COPY ./css/*.css css/
COPY ./js/*.js js/
#EXPOSE a port 

EXPOSE 80
