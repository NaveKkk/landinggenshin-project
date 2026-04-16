<template>
  <div class="home-content">
    <HeroBanner />
    <StorySection />
    <NodRegion />
    <LunaFactions />
    <ImageGallery />
    <ReviewsSection />
  </div>
</template>

<script setup>
// Ми використовуємо "../", щоб вийти з папки views і зайти в components
import HeroBanner from '../components/HeroBanner.vue'
import StorySection from '../components/StorySection.vue'
import NodRegion from '../components/NodRegion.vue'
import LunaFactions from '../components/LunaFactions.vue'
import ImageGallery from '../components/ImageGallery.vue'
import ReviewsSection from '../components/ReviewsSection.vue'
</script>

<style scoped>
.home-content {
  display: flex;
  flex-direction: column;
  gap: 60px; /* Відступи між секціями */
}
</style>