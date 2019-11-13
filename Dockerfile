FROM node:12-alpine AS builder

WORKDIR /usr/src/app

COPY . .

RUN npm install --no-optional
RUN npm run build

FROM nginx:1.17-alpine

# Copy dist
COPY --from=builder /usr/src/app/dist /var/www

# nginx config
COPY site-local.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
