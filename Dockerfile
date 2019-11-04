FROM nginx:1.17-alpine

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSe 80

CMD ["nginx", "-g", "daemon off;"]
