const express = require('express');
const cors = require('cors'); 
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
// Render сам призначає порт через змінну оточення, тому використовуємо process.env.PORT
const PORT = process.env.PORT || 3000; 

// --- Налаштування мідлварів ---
app.use(cors({
    origin: 'https://laba-2-genshin.onrender.com' // Адреса твого фронтенду
}));
app.use(express.json());

// --- Підключення до бази даних SQLite ---
const dbPath = path.resolve(__dirname, 'genshin.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error("Помилка підключення до БД:", err.message);
    else console.log("✅ Підключено до бази даних за шляхом:", dbPath);
});

// --- Ініціалізація структури бази даних ---
// Створюємо всі необхідні таблиці відразу, щоб уникнути помилок 500
db.serialize(() => {
    // Таблиця для лайків банера та статистики
    db.run(`CREATE TABLE IF NOT EXISTS stats (id TEXT PRIMARY KEY, count INTEGER DEFAULT 0)`);
    db.run(`INSERT OR IGNORE INTO stats (id, count) VALUES ('banner_likes', 0)`);

    // Таблиця для відгуків
    db.run(`CREATE TABLE IF NOT EXISTS reviews (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        author TEXT,
        text TEXT NOT NULL,
        likes INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Таблиця для фан-артів
    db.run(`CREATE TABLE IF NOT EXISTS fan_arts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        image_url TEXT,
        likes INTEGER DEFAULT 0
    )`);
});

// --- API Ендпоінти ---

// 1. Отримання даних (Відгуки та Фан-арти)
app.get('/api/data', (req, res) => {
    db.all("SELECT * FROM reviews ORDER BY created_at DESC", [], (err, reviews) => {
        if (err) return res.status(500).json({ error: err.message });
        
        db.all("SELECT * FROM fan_arts", [], (err, arts) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ reviews, arts });
        });
    });
});

// 2. Отримання лайків банера
app.get('/api/banner-likes', (req, res) => {
    db.get("SELECT count FROM stats WHERE id = 'banner_likes'", (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ count: row ? row.count : 0 });
    });
});

// 3. Універсальний ендпоінт для лайків (ОДИН екземпляр)
app.post('/api/like', (req, res) => {
    const { id, type } = req.body; 
    
    let sql;
    let params = [];

    if (type === 'banner') {
        sql = "UPDATE stats SET count = count + 1 WHERE id = 'banner_likes'";
    } else if (type === 'fanart') {
        sql = "UPDATE fan_arts SET likes = COALESCE(likes, 0) + 1 WHERE id = ?";
        params = [id];
    } else {
        sql = "UPDATE reviews SET likes = COALESCE(likes, 0) + 1 WHERE id = ?";
        params = [id];
    }

    db.run(sql, params, function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

// 4. Додавання відгуку
app.post('/api/reviews', (req, res) => {
    const { text, author } = req.body; 
    
    if (!text || text.trim().length === 0) {
        return res.status(400).json({ error: "Текст відгуку не може бути порожнім" });
    }

    const finalAuthor = author && author.trim().length > 0 ? author : 'Мандрівник';
    const sql = "INSERT INTO reviews (author, text, likes, created_at) VALUES (?, ?, 0, CURRENT_TIMESTAMP)";
    
    db.run(sql, [finalAuthor, text], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ 
            id: this.lastID, 
            author: finalAuthor, 
            message: "Відгук успішно додано!" 
        });
    });
});

// 5. Видалення відгуку
app.delete('/api/reviews/:id', (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM reviews WHERE id = ?", [id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes === 0) return res.status(404).json({ error: "Відгук не знайдено" });
        res.json({ message: "Відгук видалено" });
    });
});

// 6. Перевірка працездатності (Healthcheck)
app.get('/api/health', (req, res) => {
    res.json({ status: "OK", time: new Date().toISOString() });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`🚀 Сервер працює на порту ${PORT}`);
});