<template>
  <div class="container-fluid py-5">
    <div class="review-form-container p-4 mb-5 shadow-sm">
      <h3 class="mb-4" style="color: var(--accent);">Залишити свій відгук</h3>
      
      <div class="mb-3">
        <input 
          v-model="userName" 
          type="text" 
          class="form-control mb-2 custom-input" 
          placeholder="Ваше ім'я (напр. Мандрівник)"
        >
        <textarea 
          v-model="newReview" 
          class="form-control custom-input"
          placeholder="Поділіться вашими пригодами у Тейваті..."
          rows="4"
          maxlength="2000"
        ></textarea>
      </div>

      <div class="d-flex justify-content-between align-items-center">
        <span class="small text-muted">Символів: {{ newReview.length }} / 2000</span>
        <button 
          class="btn-custom" 
          @click="sendReview" 
          :disabled="!newReview.trim()"
        >
          Відправити відгук
        </button>
      </div>
    </div>

    <section class="mb-5">
      <h2 class="section-title">Галерея фан-артів</h2>
      <div class="row g-4">
        <div v-for="art in fanArts" :key="art.id" class="col-md-4">
          <div class="item-card p-3 shadow-sm">
            <img :src="art.image_url" class="img-fluid rounded mb-3 art-img" alt="Fan Art">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <p class="mb-0"><strong>{{ art.title }}</strong></p>
                <p class="small text-muted mb-0">Автор: {{ art.author }}</p>
              </div>
              <button 
                class="btn-like" 
                :class="{ 'already-liked': checkIfLiked(art.id, 'fanart') }"
                :disabled="checkIfLiked(art.id, 'fanart')"
                @click="addLike(art.id, 'fanart')"
              >
                ❤️ {{ art.likes || 0 }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 class="section-title">Відгуки мандрівників</h2>
      <div v-for="rev in reviews" :key="rev.id" class="review-item p-4 mb-3 position-relative shadow-sm">
        <button class="btn-delete" @click="deleteReview(rev.id)" title="Видалити відгук">
          &times;
        </button>
        
        <p class="review-text mb-3">"{{ rev.text }}"</p>
        
        <div class="d-flex justify-content-between align-items-center border-top pt-3">
          <code class="author">Автор: {{ rev.author || 'Мандрівник' }}</code>
          <button 
            class="btn-like" 
            :class="{ 'already-liked': checkIfLiked(rev.id, 'review') }"
            :disabled="checkIfLiked(rev.id, 'review')"
            @click="addLike(rev.id, 'review')"
          >
            👍 {{ rev.likes || 0 }}
          </button>
        </div>
      </div>

      <div v-if="reviews.length === 0" class="text-center text-muted p-5">
        Відгуків поки немає. Станьте першим!
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import client from '../api/client' // Рівень 1, п.1: Використовуємо наш Axios клієнт

// Рівень 1, п.3: Оголошення реактивних змінних (аналог data())
const reviews = ref([])
const fanArts = ref([])
const newReview = ref('')
const userName = ref('')

// Списки лайків з локального сховища
const likedReviews = ref(JSON.parse(localStorage.getItem('likedReviews') || '[]'))
const likedArts = ref(JSON.parse(localStorage.getItem('likedArts') || '[]'))

/**
 * Рівень 1, п.4: Метод для отримання даних (GET запит)
 * Рівень 3: Завантажуємо відгуки та фан-арти одним запитом до API
 */
const loadAll = async () => {
  try {
    const res = await client.get('/data')
    reviews.value = res.data.reviews || []
    fanArts.value = res.data.arts || []
  } catch (error) {
    console.error("Помилка завантаження даних через Axios:", error)
  }
}

/**
 * Рівень 1, п.5: Метод для додавання даних (POST запит)
 * Відправляє новий відгук на сервер
 */
const sendReview = async () => {
  const textToSend = newReview.value.trim()
  if (!textToSend) return

  try {
    const response = await client.post('/reviews', { 
      text: textToSend, 
      author: userName.value.trim() || "Мандрівник" 
    })

    if (response.status === 201) {
      newReview.value = ''; userName.value = '';
      await loadAll() // Рівень 2: Тестування оновлення даних після додавання
    }
  } catch (error) {
    alert("Сервер не відповідає. Перевірте з'єднання з бекендом.")
  }
}

/**
 * Метод для видалення даних (DELETE запит)
 */
const deleteReview = async (id) => {
  if (!confirm("Видалити цей відгук?")) return
  try {
    const res = await client.delete(`/reviews/${id}`)
    if (res.status === 200) await loadAll()
  } catch (error) {
    console.error("Помилка видалення:", error)
  }
}

const addLike = async (id, type) => {
  if (checkIfLiked(id, type)) return
  try {
    const response = await client.post('/like', { id, type })
    if (response.status === 200) {
      // Логіка оновлення лайків у UI (залишається твоя)
      if (type === 'review') {
        likedReviews.value.push(id)
        localStorage.setItem('likedReviews', JSON.stringify(likedReviews.value))
      } else {
        likedArts.value.push(id)
        localStorage.setItem('likedArts', JSON.stringify(likedArts.value))
      }
      await loadAll()
    }
  } catch (error) {
    console.error("Помилка лайка:", error)
  }
}

const checkIfLiked = (id, type) => {
  return type === 'fanart' ? likedArts.value.includes(id) : likedReviews.value.includes(id)
}

onMounted(loadAll)
</script>

<style scoped>
/* Стилі залишаються без змін */
.review-item, .item-card, .review-form-container {
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
}
.section-title {
  border-left: 4px solid var(--accent);
  padding-left: 15px;
  margin-bottom: 30px;
}
.custom-input {
  background: var(--bg) !important;
  color: var(--text) !important;
  border: 1px solid var(--border) !important;
}
.btn-custom {
  background: transparent;
  border: 1px solid var(--accent);
  color: var(--accent);
  padding: 8px 25px;
  border-radius: 6px;
}
.btn-custom:hover {
  background: var(--accent);
  color: #000;
}
.btn-like {
  background: rgba(13, 202, 240, 0.1);
  border: 1px solid rgba(13, 202, 240, 0.2);
  color: #fff;
  border-radius: 20px;
  padding: 4px 15px;
}
.btn-like.already-liked {
  background: var(--accent) !important;
  color: #000 !important;
  opacity: 1 !important;
}
.btn-like:disabled {
  cursor: default;
}
.btn-delete {
  position: absolute;
  top: 10px; right: 15px;
  background: transparent; border: none;
  color: #ff4d4d; font-size: 1.5rem;
  cursor: pointer; opacity: 0.5;
}
.btn-delete:hover { opacity: 1; }
.art-img { width: 100%; height: 200px; object-fit: cover; }
.author { color: var(--accent); }
</style>