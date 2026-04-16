<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top custom-nav">
    <div class="container">
      <span class="navbar-brand d-flex align-items-center">
        <i class="fa-solid fa-moon me-2 moon-white"></i> 
        Genshin Luna
      </span>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarLuna">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarLuna">
        <div class="navbar-nav ms-auto">
          <a v-for="link in navLinks" :key="link.id" 
             :href="'#' + link.id" 
             class="nav-link text-white ms-lg-3"
             :class="{ 'active-link': activeSection === link.id }">
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('')
const navLinks = [
  { id: 'story', name: 'Сюжет' },
  { id: 'nod', name: 'Нод-Край' },
  { id: 'luna', name: 'Luna' },
  { id: 'fanart', name: 'Фан-роботи' },
  { id: 'reviews', name: 'Відгуки' },
  { id: 'gallery', name: 'Галерея' }
]

const handleScroll = () => {
  const sections = document.querySelectorAll('section, header, div[id]')
  let current = ''
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.getAttribute('id')
    }
  })
  activeSection.value = current
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.custom-nav { background: rgba(0, 0, 0, 0.8); backdrop-filter: blur(5px); }
.active-link { color: #0dcaf0 !important; border-bottom: 2px solid #0dcaf0; }
.nav-link:hover { color: #0dcaf0 !important; }

.moon-white {
  color: #ffffff !important;
  display: inline-block;
  min-width: 20px;
}

@media (max-width: 991px) {
  .navbar-collapse {
    background: rgba(0, 0, 0, 0.9);
    padding: 15px;
    border-radius: 8px;
    margin-top: 10px;
  }
  .nav-link {
    padding: 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  .active-link {
    border-bottom: none !important;
    border-left: 3px solid #0dcaf0;
    padding-left: 10px;
  }
}
</style>