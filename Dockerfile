FROM nginx
EXPOSE 8080
ADD build /build
COPY nginx.conf /etc/nginx/nginx.conf



