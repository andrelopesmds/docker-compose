FROM node:18 as builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .
RUN npm run build


FROM nginx

COPY --from=builder /app/build /data/www

COPY nginx.conf /etc/nginx/conf.d/default.conf
