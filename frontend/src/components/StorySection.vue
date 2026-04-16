<template>
  <section id="story" class="section-block">
    <h2>Основний сюжет</h2>

    <p>
      Під час своїх мандрів світами близнюки, брат і сестра, потрапляють до Тейвату, але вже збираючись його покинути, вони стикаються з невідомим божеством. У битві, що послідувала, божество, яке назвало себе охоронцем небесного порядку, захоплює спочатку близнюка, а потім і Мандрівника (Мандрівницю), запечатуючи їхні сили та повертаючи назад до Тейвату.
Через невизначений проміжок часу Мандрівник(ця) прокидається десь у світі й продовжує блукати Тейватом, поки не виловлює з озера Паймон, тим самим рятуючи її від утоплення. На знак подяки Паймон стає провідником і компаньйоном Мандрівника (Мандрівниці) та пропонує зустрітися з усіма сімома Архонтами, щоб знайти його (її) загубленого близнюка.


    </p>

    <div id="storyCarousel" class="carousel slide shadow rounded overflow-hidden" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/img/prologue.jpg" class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img src="../assets/img/prologue1.jpg" class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img src="../assets/img/traveler.jpg" class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img src="../assets/img/traveler1.jpg" class="d-block w-100">
        </div>
      </div>
      
      <button class="carousel-control-prev" type="button" data-bs-target="#storyCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#storyCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>

<style scoped>
/* Локальні стилі конкретно для цієї секції */
h2 {
    border-left: 5px solid #0dcaf0; /* Твій синій акцент */
    padding-left: 15px;
    margin-bottom: 20px;
}

p {
    line-height: 1.8;
    color: #e6e9ff;
    margin-bottom: 30px;
}

/* Налаштування картинок у каруселі згідно з твоїм старим CSS */
.carousel img {
    border-radius: 10px;
    max-height: 450px; /* Трохи збільшив для кращого вигляду */
    object-fit: cover;
}
</style>