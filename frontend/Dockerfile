# Використовуємо 22 версію, яку вимагає Vite 8
FROM node:22-alpine as build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# У Node 22 CustomEvent вже є, тому просто запускаємо збірку
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]