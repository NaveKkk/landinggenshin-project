import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Додаємо імпорт роутера

// СТИЛІ
import 'bootstrap/dist/css/bootstrap.min.css' 
import './assets/main.css' // Твої стилі йдуть останніми — це правильно!

// БІБЛІОТЕКИ
import AOS from 'aos' // Додаємо імпорт AOS
import 'aos/dist/aos.css' // Обов'язково імпортуй стилі AOS, інакше анімації не буде

const app = createApp(App)

app.use(router)
app.mount('#app')

// Ініціалізація анімації після монтування
AOS.init({
  duration: 800,
  once: false,
  offset: 100 // анімація почнеться трохи раніше, ніж блок з'явиться в кадрі
})