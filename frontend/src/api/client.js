import axios from 'axios';

/**
 * Рівень 1, п.1: Створення централізованого клієнта axios
 * дозволяє налаштувати базову URL-адресу в одному місці.
 */
const client = axios.create({
    baseURL: 'http://localhost:3000/api', // Адреса твого Node.js сервера
    timeout: 5000, // Тайм-аут запиту (5 секунд)
});

/**
 * Інтерцептори (теоретичні відомості): 
 * Можна додати обробку помилок для всіх запитів одразу
 */
client.interceptors.response.use(
    response => response,
    error => {
        console.error("Помилка API:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default client;