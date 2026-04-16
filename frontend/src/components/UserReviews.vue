<template>
  <section id="reviews" class="container my-5 section-block">
    <h2 class="mb-4">Відгуки мандрівників</h2>

    <div class="review-form-container p-4 mb-5 shadow-sm">
      <h3 class="h5 mb-3" style="color: #0dcaf0;">Залишити свій відгук</h3>
      
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
        <button class="btn-custom" @click="sendReview" :disabled="!newReview.trim()">
          Відправити відгук
        </button>
      </div>
    </div>

    <div class="reviews-list">
      <div v-for="rev in reviews" :key="rev.id" class="review-item p-3 mb-3 shadow-sm">
        <div class="d-flex justify-content-between align-items-start mb-2">
          <p class="mb-0 review-text">"{{ rev.text }}"</p>
          <button class="btn-delete" @click="deleteReview(rev.id)" title="Видалити">
            &times;
          </button>
        </div>
        
        <div class="d-flex justify-content-between align-items-center mt-3 border-top pt-2">
          <code class="author">Автор: {{ rev.author || 'Мандрівник' }}</code>
          <button class="btn-like" @click="addLike(rev.id)">
            👍 {{ rev.likes || 0 }}
          </button>
        </div>
      </div>
      
      <div v-if="reviews.length === 0" class="text-center text-muted p-5">
        Відгуків поки немає. Станьте першим!
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const reviews = ref([])
const newReview = ref('')
const userName = ref('')

// 1. Завантаження даних - додаємо перевірку структури
const loadReviews = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/data')
    if (!res.ok) throw new Error("Помилка мережі")
    const data = await res.json()
    
    // Перевіряємо, чи дані лежать в data.reviews чи просто в data
    reviews.value = data.reviews || data || []
  } catch (error) {
    console.error("Помилка завантаження:", error)
  }
}

// 2. Відправка відгуку - фіксуємо передачу імені
const sendReview = async () => {
  const textToSend = newReview.value.trim()
  const authorToSend = userName.value.trim() || "Мандрівник"
  
  if (!textToSend) return

  try {
    const response = await fetch('http://localhost:3000/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        text: textToSend, 
        author: authorToSend // Передаємо ім'я
      })
    })
    
    if (response.ok) {
      newReview.value = ''
      userName.value = ''
      await loadReviews() // Оновлюємо список
    }
  } catch (error) {
    alert("Сервер не відповідає. Перевірте роботу бекенду.")
  }
}

// 3. Видалення - перевірте, чи id у вашій базі називається саме id (а не _id)
const deleteReview = async (id) => {
  if (!confirm("Ви впевнені, що хочете видалити цей відгук?")) return

  try {
    const response = await fetch(`http://localhost:3000/api/reviews/${id}`, {
      method: 'DELETE'
    })
    
    if (response.ok) {
      // Оптимістичне оновлення (видаляємо зі списку відразу)
      reviews.value = reviews.value.filter(r => r.id !== id)
    } else {
      alert("Не вдалося видалити відгук на сервері")
    }
  } catch (error) {
    console.error("Помилка при видаленні:", error)
  }
}

// 4. Лайки
const addLike = async (id) => {
  try {
    const response = await fetch('http://localhost:3000/api/like', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, type: 'review' })
    })
    
    if (response.ok) {
      // Знаходимо відгук у локальному списку і додаємо лайк візуально
      const index = reviews.value.findIndex(r => r.id === id)
      if (index !== -1) {
        reviews.value[index].likes = (reviews.value[index].likes || 0) + 1
      }
    }
  } catch (error) {
    console.error("Помилка лайка:", error)
  }
}

onMounted(loadReviews)
</script>

<style scoped>
h2 {
  border-left: 5px solid #0dcaf0;
  padding-left: 15px;
}

.review-form-container, .review-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}

.custom-input {
  background: rgba(0, 0, 0, 0.3) !important;
  border: 1px solid rgba(13, 202, 240, 0.2) !important;
  color: #fff !important;
}

.custom-input:focus {
  border-color: #0dcaf0 !important;
  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.25);
}

.review-text {
  font-style: italic;
  color: #e6e9ff;
}

.author {
  color: #0dcaf0;
  background: transparent;
}

.btn-custom {
  background: transparent;
  border: 1px solid #0dcaf0;
  color: #0dcaf0;
  padding: 8px 20px;
  border-radius: 5px;
  transition: 0.3s;
}

.btn-custom:hover:not(:disabled) {
  background: #0dcaf0;
  color: #000;
}

.btn-custom:disabled {
  opacity: 0.5;
  border-color: #666;
  color: #666;
}

.btn-like {
  background: rgba(13, 202, 240, 0.1);
  border: 1px solid rgba(13, 202, 240, 0.3);
  color: #fff;
  border-radius: 20px;
  padding: 2px 12px;
  transition: 0.2s;
}

.btn-like:hover {
  background: rgba(13, 202, 240, 0.3);
}

.btn-delete {
  background: transparent;
  border: none;
  color: #ff4d4d;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  opacity: 0.6;
}

.btn-delete:hover {
  opacity: 1;
}

.border-top {
  border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
}
</style>