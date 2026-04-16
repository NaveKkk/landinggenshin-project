FROM node:18-alpine as build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# ФІКС: Використовуємо розширення .cjs (CommonJS), щоб Node міг його "прочитати" через require
RUN echo "global.CustomEvent = class CustomEvent extends Event { constructor(type, params) { super(type, params); this.detail = params?.detail; } };" > ./prebuild-fix.cjs

# Запускаємо збірку, звертаючись до файлу .cjs
RUN node -e "require('./prebuild-fix.cjs')" && npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]