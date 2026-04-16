<template>
  <header id="banner" :class="{ 'blur-effect': isHovered }">
    <div class="banner-content text-center text-white">
      <img src="../assets/img/logo.png" class="logo mb-3">
      <h1>Подорож Тейватом</h1>
      
      <button 
        class="btn btn-light mt-3" 
        id="startBtn"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
        @click="openGame"
      >
        Почати пригоду
      </button>

      <div class="like-container mt-4">
        <button 
          id="likeBtn" 
          class="btn" 
          :class="userLikes > 0 ? 'btn-danger' : 'btn-outline-danger'"
          :style="likeBtnStyle"
          @click="handleLike"
        >
          <span id="heart">{{ userLikes > 0 ? '❤️' : '🤍' }}</span> 
          <span id="likeCount">{{ count }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import client from '../api/client' // Імпортуємо централізований клієнт (Рівень 1, п.1)

// --- Стан компонента ---
const isHovered = ref(false)
const count = ref(0) // Глобальна кількість лайків з БД
const userLikes = ref(0) // Кількість лайків від поточного користувача (макс. 10)
const likeBtnStyle = ref({})

/**
 * Рівень 1, п.4: Метод для отримання даних з Back-End (Axios GET)
 * Рівень 3: Завантажуємо актуальну кількість лайків банера з таблиці stats
 */
const loadBannerLikes = async () => {
  try {
    const res = await client.get('/banner-likes')
    // В axios дані лежать у полі .data
    count.value = res.data.count
  } catch (e) {
    console.error("Помилка при завантаженні лайків банера через Axios:", e)
  }
}

/**
 * Рівень 1, п.5: Метод для додавання даних (Axios POST)
 * Оновлює лічильник у базі даних
 */
const handleLike = async () => {
  if (userLikes.value < 10) {
    try {
      // Надсилаємо POST запит. Axios автоматично конвертує об'єкт у JSON
      const response = await client.post('/like', { type: 'banner' })

      if (response.status === 200) {
        count.value++
        userLikes.value++
        
        // Візуальний ефект натискання
        likeBtnStyle.value = { transform: 'scale(1.2)', transition: '0.1s' }
        setTimeout(() => {
          likeBtnStyle.value = { transform: 'scale(1)' }
        }, 100)
      }
    } catch (e) {
      console.error("Помилка при збереженні лайка через Axios:", e)
    }
  } else {
    alert("Ого! Ви вже достатньо підтримали подорож ❤️")
  }
}

// Функція відкриття гри
const openGame = () => {
  window.open("https://genshin.hoyoverse.com/en/", "_blank")
}

// --- Логіка блискіток (Sparkles) ---
let sparkleInterval = null

const createSparkle = () => {
  const banner = document.getElementById("banner")
  if (!banner) return
  
  const sparkle = document.createElement("div")
  const size = Math.random() * 3 + 1 + "px"
  
  sparkle.className = "sparkle"
  sparkle.style.width = size
  sparkle.style.height = size
  sparkle.style.left = Math.random() * 100 + "%"
  sparkle.style.top = Math.random() * 100 + "%"
  
  banner.appendChild(sparkle)
  setTimeout(() => sparkle.remove(), 3000)
}

// --- (Lifecycle Hooks) ---
onMounted(() => {
  // Рівень 2: Тестування зв'язку при монтуванні
  loadBannerLikes() 
  sparkleInterval = setInterval(createSparkle, 150)
})

onUnmounted(() => {
  // Очищення таймера при видаленні компонента
  if (sparkleInterval) clearInterval(sparkleInterval)
})
</script>

<style scoped>

#banner {
    height: 50vh;
    background: url("../assets/img/banner.jpg") center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

#banner::after {
    content: "";
    position: absolute;
    inset: 0;
    backdrop-filter: blur(0px);
    transition: backdrop-filter 0.5s ease;
    z-index: 0;
}

/* Реалізація блюру через клас Vue */
#banner.blur-effect::after {
    backdrop-filter: blur(3px);
}

.banner-content {
    position: relative;
    z-index: 1;
    background: rgba(0,0,0,0.4);
    padding: 30px;
    border-radius: 15px;
}

.logo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

/* Анімація блискіток */
:deep(.sparkle) {
    position: absolute; 
    background: white; 
    border-radius: 50%; 
    pointer-events: none; 
    opacity: 0; 
    animation: sparkleAnim 3s linear infinite;
}

@keyframes sparkleAnim {
    0% { transform: translateY(0) scale(0); opacity: 0; }
    50% { opacity: 0.8; }
    100% { transform: translateY(-100px) scale(1.2); opacity: 0; }
}

/* Для планшетів та великих телефонів (ширина екрана до 768px) */
@media (max-width: 768px) {
    #banner {
        height: 50vh; /* Трохи зменшуємо висоту банера */
    }

    .banner-content {
        padding: 20px; /* Менші відступи всередині */
    }

    .logo {
        width: 100px; /* Менший логотип */
        height: 100px;
    }

    h1 {
        font-size: 1.8rem; /* Менший текст заголовка */
    }
}

/* Для телефонів (ширина екрана до 576px) */
@media (max-width: 576px) {
    #banner {
        height: 45vh; /* Ще менша висоту банера */
    }

    .banner-content {
        padding: 15px; /* Ще менші відступи всередині */
    }

    .logo {
        width: 80px; /* Логотип ще менший */
        height: 80px;
        margin-bottom: 10px !important; /* Трохи менший відступ знизу */
    }

    h1 {
        font-size: 1.5rem; /* Ще менший текст заголовка */
        padding: 0 10px; /* Додатковий відступ з боків для тексту */
    }

    #startBtn {
        font-size: 0.9rem; /* Менший текст кнопки "Почати" */
        padding: 8px 20px;
    }

    .like-container {
        transform: scale(0.9); /* Трохи зменшуємо всю кнопку лайків */
        margin-top: 15px !important; /* Зменшуємо відступ зверху */
    }
}

</style>