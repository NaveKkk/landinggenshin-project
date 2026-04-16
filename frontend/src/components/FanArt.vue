<template>
  <section id="fanart" class="container my-5 section-block">
    <h2 class="text-center mb-4">Фанатські арти</h2>

    <div class="row g-4">
      <div class="col-md-4">
        <div class="fanart-card shadow-sm rounded overflow-hidden">
          <img src="../assets/img/photo_2026-04-14_20-30-53.jpg" class="img-fluid" alt="Fan Art">
          <div class="p-3 bg-dark text-white">
            <p class="mb-0">Автор: 
              <a href="https://www.tiktok.com/@l_nave_l?_r=1&_t=ZS-95XNP7XAtu4" target="_blank" class="author-link">Nave</a>
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="fanart-card shadow-sm rounded overflow-hidden">
          <img src="../assets/img/photo_2026-04-14_20-30-41.jpg" class="img-fluid" alt="Fan Art">
          <div class="p-3 bg-dark text-white">
            <p class="mb-0">Автор: 
              <a href="https://www.tiktok.com/@l_nave_l?_r=1&_t=ZS-95XNP7XAtu4" target="_blank" class="author-link">Nave</a>
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="fanart-card shadow-sm rounded overflow-hidden">
          <img src="../assets/img/photo_2026-04-14_20-30-56.jpg" class="img-fluid" alt="Fan Art">
          <div class="p-3 bg-dark text-white">
            <p class="mb-0">Автор: 
              <a href="https://www.tiktok.com/@l_nave_l?_r=1&_t=ZS-95XNP7XAtu4" target="_blank" class="author-link">Nave</a>
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="fanart-card shadow-sm rounded overflow-hidden">
          <img src="../assets/img/photo_2026-04-14_20-30-35.jpg" class="img-fluid" alt="Fan Art">
          <div class="p-3 bg-dark text-white">
            <p class="mb-0">Автор: 
              <a href="https://t.me/enottle" target="_blank" class="author-link">Enottle</a>
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="fanart-card shadow-sm rounded overflow-hidden">
          <img src="../assets/img/photo_2026-04-14_20-30-31.jpg" class="img-fluid" alt="Fan Art">
          <div class="p-3 bg-dark text-white">
            <p class="mb-0">Автор: 
              <a href="https://t.me/enottle" target="_blank" class="author-link">Enottle</a>
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="fanart-card shadow-sm rounded overflow-hidden">
          <img src="../assets/img/photo_2026-04-14_20-30-11.jpg" class="img-fluid" alt="Fan Art">
          <div class="p-3 bg-dark text-white">
            <p class="mb-0">Автор: 
              <a href="https://t.me/enottle" target="_blank" class="author-link">Enottle</a>
            </p>
          </div>
        </div>
      </div>
      
    </div>

    <div class="video-section mt-5">
  <h3 class="mb-4 text-center">Фанатські відео</h3>
  <div class="row justify-content-center">
    <div class="col-md-6 col-lg-4"> 
      <div class="fanart-card shadow-sm rounded overflow-hidden">
        <video controls class="w-100 d-block">
          <source src="../assets/video/video1.mp4" type="video/mp4">
          Ваш браузер не підтримує відео.
        </video>
        <div class="p-3 bg-dark text-white">
          <p class="mb-0">Автор: 
             <a href="https://www.tiktok.com/@l_nave_l?_r=1&_t=ZS-95XNP7XAtu4" target="_blank" class="author-link">Nave</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  </section>
</template>

<style scoped>
h2, h3 {
  color: #e6e9ff;
  border-left: 5px solid #0dcaf0;
  padding-left: 15px;
}

.fanart-card img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.fanart-card:hover img {
  transform: scale(1.03);
}

.author-link {
  color: #0dcaf0;
  text-decoration: none;
  font-weight: bold;
}

.author-link:hover {
  text-decoration: underline;
}

.video-container {
  max-width: 800px;
  margin: 0 auto;
  border: 2px solid rgba(13, 202, 240, 0.3);
}
</style>