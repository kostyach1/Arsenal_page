FROM nginx:latest

COPY ./container/ /usr/share/nginx/html

EXPOSE 80
