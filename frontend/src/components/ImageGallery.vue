<template>
  <section id="gallery" class="container my-5 section-block">
    <h2 class="text-center mb-4">Галерея</h2>

    <div class="row g-3 gallery-grid">
      <div class="col-lg-2 col-md-3 col-6">
        <img src="../assets/img/lempo.jpg" class="img-fluid rounded">
      </div>

      <div class="col-lg-2 col-md-3 col-6">
        <img src="../assets/img/hiisi.jpg" class="img-fluid rounded">
      </div>

      <div class="col-lg-2 col-md-3 col-6">
        <img src="../assets/img/ashveil.jpg" class="img-fluid rounded">
      </div>

      <div class="col-lg-2 col-md-3 col-6">
        <img src="../assets/img/paha.jpg" class="img-fluid rounded">
      </div>

      <div class="col-lg-2 col-md-3 col-6">
        <img src="../assets/img/wavechaser.jpg" class="img-fluid rounded">
      </div>

      <div class="col-lg-2 col-md-3 col-6">
        <img src="../assets/img/krumkake.jpg" class="img-fluid rounded">
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Твій фірмовий заголовок для секції */
h2 {
  color: #e6e9ff;
  font-weight: bold;
}

/* Твій оригінальний CSS для галереї */
.gallery-grid img {
  height: 150px;
  width: 100%;
  object-fit: cover;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}

.gallery-grid img:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(13, 202, 240, 0.4);
}

/* Додатковий стиль для section-block, якщо він не підтягнувся глобально */
.section-block {
    background: rgba(255,255,255,0.03);
    padding: 30px;
    border-radius: 15px;
}
</style>