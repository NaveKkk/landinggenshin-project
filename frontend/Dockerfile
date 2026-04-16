FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=4000
EXPOSE 4000
# Виправлений рядок нижче:
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "4000"]