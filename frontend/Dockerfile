FROM node:18-alpine as build
WORKDIR /app

# Копіюємо файли залежностей
COPY package*.json ./
RUN npm install

# Копіюємо решту коду
COPY . .

# ФІКС: Створюємо CustomEvent, щоб Vite не "падав" під час білду
# Це вирішує помилку ReferenceError: CustomEvent is not defined
RUN echo "global.CustomEvent = class CustomEvent extends Event { constructor(type, params) { super(type, params); this.detail = params?.detail; } };" > ./prebuild-fix.js

# Запускаємо збірку з нашим фіксом
RUN node -e "require('./prebuild-fix.js')" && npm run build

# Етап запуску через Nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]