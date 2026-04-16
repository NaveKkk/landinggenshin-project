<template>
  <section id="nod" class="section-block">
    <h2>Регіон Нод-Край</h2>

    <p>
      Нод-Край — автономний регіон, розташований на півдні Сніжної. Він тісно пов'язаний з трьома 
      Місяцями, що колись існували в Тейваті. Мешканці острова Хійсі Діти Морозного Місяця поклоняються 
      Діві Місяця Куутар, статуї якої розташовані по всьому Нод-Краю.
      Найбільше місто Нод-Краю — Місто Наша.
      Дія тому «Пісня порожньої місяця» розгортається в цьому регіоні.
    </p>

    <p>
      Благословенна місяцем земля, розташована на північному заході Тейвату. Слідуйте за срібною ниткою, 
      витканою молодиком, перетньте різкі вітри і замерзлу тундру, поки озера, немов уламки розбитого 
      дзеркала, не відіб'ють вічний блиск інею. Дні короткі, але в довгі ночі світло і пісні нового місяця 
      ніжно пестять обличчя Мандрівників. Запаліть вогні в вежі, щоб справжнє світло місяця знову засяяло 
      над цією землею.
    </p>

    <div id="nodCarousel" class="carousel slide shadow rounded overflow-hidden" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/img/hiisi.jpg" class="d-block w-100" alt="Острів Хійсі">
        </div>
        <div class="carousel-item">
          <img src="../assets/img/lempo.jpg" class="d-block w-100" alt="Лемпо">
        </div>
        <div class="carousel-item">
          <img src="../assets/img/paha.jpg" class="d-block w-100" alt="Паха">
        </div>
        <div class="carousel-item">
          <img src="../assets/img/voidsea.jpg" class="d-block w-100" alt="Море порожнечі">
        </div>
        <div class="carousel-item">
          <img src="../assets/img/wavechaser.jpg" class="d-block w-100" alt="Хвилеріз">
        </div>
        <div class="carousel-item">
          <img src="../assets/img/ashveil.jpg" class="d-block w-100" alt="Попільна завіса">
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#nodCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#nodCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>

<style scoped>
/* Використовуємо ваші фірмові стилі заголовків */
h2 {
    border-left: 5px solid #0dcaf0;
    padding-left: 15px;
    margin-bottom: 20px;
}

p {
    line-height: 1.8;
    color: #e6e9ff;
}

/* Налаштування картинок згідно з оригінальним CSS */
.carousel img {
    border-radius: 10px;
    max-height: 450px;
    object-fit: cover;
}

/* Додаємо невеликий відступ між абзацами, щоб текст не зливався */
p + p {
    margin-top: 15px;
}
</style>