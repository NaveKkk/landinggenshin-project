const express = require('express');
const cors = require('cors'); 
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3000;

// Налаштування мідлварів
app.use(cors()); 
app.use(express.json()); 

// Підключення до бази даних SQLite
const path = require('path');
const dbPath = path.resolve(__dirname, 'genshin.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error("Помилка підключення:", err.message);
    else console.log("✅ Підключено до:", dbPath);
});

// Створюємо таблицю для глобальних лічильників, якщо її немає
db.run(`CREATE TABLE IF NOT EXISTS stats (id TEXT PRIMARY KEY, count INTEGER DEFAULT 0)`);
// Ініціалізуємо лічильник банера одним записом
db.run(`INSERT OR IGNORE INTO stats (id, count) VALUES ('banner_likes', 0)`);

// Додайте новий ендпоінт для отримання лайків банера
app.get('/api/banner-likes', (req, res) => {
    db.get("SELECT count FROM stats WHERE id = 'banner_likes'", (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ count: row ? row.count : 0 });
    });
});

// Оновлюємо існуючий /api/like, щоб він підтримував тип 'banner'
app.post('/api/like', (req, res) => {
    const { id, type } = req.body; 
    
    let sql;
    let params = [id];

    if (type === 'banner') {
        sql = "UPDATE stats SET count = count + 1 WHERE id = 'banner_likes'";
        params = []; // для банера id не потрібен, бо запис один
    } else {
        const table = type === 'fanart' ? 'fan_arts' : 'reviews';
        sql = `UPDATE ${table} SET likes = COALESCE(likes, 0) + 1 WHERE id = ?`;
    }

    db.run(sql, params, function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

// --- API Ендпоінти ---

// 1. Отримання даних (Відгуки та Фан-арти)
app.get('/api/data', (req, res) => {
    // Сортуємо відгуки від нових до старих
    db.all("SELECT * FROM reviews ORDER BY created_at DESC", [], (err, reviews) => {
        if (err) return res.status(500).json({ error: err.message });
        
        db.all("SELECT * FROM fan_arts", [], (err, arts) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ reviews, arts });
        });
    });
});

// 2. Додавання відгуку (Виправлено запис автора та початкові лайки)
app.post('/api/reviews', (req, res) => {
    const { text, author } = req.body; 
    
    // Валідація тексту
    if (!text || text.trim().length === 0) {
        return res.status(400).json({ error: "Текст відгуку не може бути порожнім" });
    }

    // Якщо автор не вказаний, ставимо "Мандрівник"
    const finalAuthor = author && author.trim().length > 0 ? author : 'Мандрівник';

    // Додаємо likes = 0 при створенні, щоб уникнути [NULL]
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

// 3. Видалення відгуку (Додано!)
app.delete('/api/reviews/:id', (req, res) => {
    const { id } = req.params;

    db.run("DELETE FROM reviews WHERE id = ?", [id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes === 0) return res.status(404).json({ error: "Відгук не знайдено" });
        
        res.json({ message: "Відгук видалено" });
    });
});

// 4. Оновлення лайків (Виправлено проблему з NULL через COALESCE)
app.post('/api/like', (req, res) => {
    const { id, type } = req.body; 
    const table = type === 'fanart' ? 'fan_arts' : 'reviews';

    // COALESCE(likes, 0) перетворює NULL на 0 перед додаванням
    const sql = `UPDATE ${table} SET likes = COALESCE(likes, 0) + 1 WHERE id = ?`;

    db.run(sql, [id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

// 5. Тест працездатності
app.get('/api/health', (req, res) => {
    res.json({ status: "OK", db_connected: true, time: new Date().toISOString() });
});

app.listen(PORT, () => console.log(`🚀 Сервер запущено на http://localhost:${PORT}`));