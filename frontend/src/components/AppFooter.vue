<template>
  <footer class="footer mt-auto py-4">
    <div class="container text-center">
      <div class="footer-divider mb-4"></div>
      
      <p class="mb-2 copyright">© 2026 Genshin Luna</p>
      
      <div class="footer-links mb-3">
        <a href="#story" class="mx-2">Сюжет</a>
        <a href="#nod" class="mx-2">Нод-Край</a>
        <a href="#luna" class="mx-2">Luna</a>
         <a href="#fanart" class="mx-2">Фан-роботи</a>
          <a href="#reviews" class="mx-2">Відгуки</a>
        <a href="#gallery" class="mx-2">Галерея</a>
      </div>

      <p class="small text-muted">
        Сайт розроблено в рамках навчальної програми "Комп'ютерна графіка та веб-дизайн".
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: rgba(10, 10, 15, 0.9); /* Темний фон у тон сайту */
  color: #e6e9ff;
  border-top: 1px solid rgba(13, 202, 240, 0.1);
}

.footer-divider {
  height: 2px;
  background: linear-gradient(to right, transparent, #0dcaf0, transparent);
  width: 50%;
  margin: 0 auto;
  opacity: 0.5;
}

.copyright {
  font-weight: bold;
  letter-spacing: 1px;
  color: #0dcaf0;
}

.footer-links a {
  color: #e6e9ff;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #0dcaf0;
}

.text-muted {
  font-size: 0.8rem;
  opacity: 0.6;
}
</style>