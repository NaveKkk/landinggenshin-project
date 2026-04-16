<template>
  <div class="app-wrapper">
    <AppNavbar />
    <main>
      <HeroSection />
      <StorySection />
      <NodRegion />
      <LunaFactions />
      <FanArt />
      <UserReviews />
      <ImageGallery />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from './components/AppNavbar.vue'
import HeroSection from './components/HeroBanner.vue' 
import StorySection from './components/StorySection.vue'
import NodRegion from './components/NodRegion.vue'
import LunaFactions from './components/LunaFactions.vue'
import FanArt from './components/FanArt.vue'
import UserReviews from './components/UserReviews.vue'
import ImageGallery from './components/ImageGallery.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
/* Стилі без scoped, щоб вони діяли на весь каркас */
.main-container {
    max-width: 1200px;
    margin: 0 auto;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.2);
    min-height: 100vh;
}
</style>