import axios from 'axios';

/**
 * Рівень 1, п.1: Централізований клієнт axios.
 * Змінюємо localhost на реальну адресу бекенду на Render.
 */
const client = axios.create({
    // Вказуємо адресу твого розгорнутого бекенду
    baseURL: 'https://laba-1-genshin.onrender.com/api', 
    timeout: 10000, // Збільшимо до 10 сек, бо безкоштовні сервери Render можуть "засинати"
});

client.interceptors.response.use(
    response => response,
    error => {
        console.error("Помилка API:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default client;