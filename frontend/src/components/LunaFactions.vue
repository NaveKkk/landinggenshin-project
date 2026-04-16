<script setup>
import { onMounted } from 'vue'
// Імпортуємо JS Бутстрапа
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'

onMounted(() => {
  // Знаходимо всі каруселі на сторінці за класом .carousel
  const allCarousels = document.querySelectorAll('.carousel')
  
  // Ініціалізуємо кожну з них
  allCarousels.forEach(carouselEl => {
    new bootstrap.Carousel(carouselEl, {
      interval: 3000,
      ride: 'carousel',
      wrap: true
    })
  })
})
</script>

<template>
  <section id="luna" class="section-block">
    <h2>Оновлення Luna: Фракції</h2>

    <p><b>Фатуї</b> — за наказом Цариці армія під прапором Блідої зірки і Провісники були 
    відкликані з регіонів назад до Сніжної і розквартировані в Нод-Краї.</p>

    <div id="fatuiCarousel" class="carousel slide my-4 shadow rounded overflow-hidden">
      <div class="carousel-inner">
        <div class="carousel-item active"><img src="../assets/img/fatui1.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/fatui.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/tsaritsa.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/pero.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/dottore.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/arlecchino.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/pulchinella.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/sandrone.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/pantalone.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/tartaglia.jpg" class="d-block w-100"></div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#fatuiCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#fatuiCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>

    <p><b>Гільдія шукачів пригод</b> — у регіоні знаходиться головний опорний пункт організації на 
    території Сніжної, покликаний допомагати мандрівникам. Після прибуття до північного міста 
    головного героя має зустріти хтось важливий зі штабу самої гільдії, ймовірно, справжня Катерина.</p>

    <div id="guildCarousel" class="carousel slide my-4 shadow rounded overflow-hidden">
      <div class="carousel-inner">
        <div class="carousel-item active"><img src="../assets/img/guild1.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/guild.jpg" class="d-block w-100"></div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#guildCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#guildCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>

    <p><b>Шабаш Відьом</b> — приваблені драмами і конфліктами, що відбуваються в північному регіоні, деякі відьми 
    з'являться в Нод-Краї, щоб зібрати інформацію.</p>

    <div id="hexenzirkelCarousel" class="carousel slide my-4 shadow rounded overflow-hidden">
      <div class="carousel-inner">
        <div class="carousel-item active"><img src="../assets/img/hexenzirkel.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/TheHexenzirkel.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/mond.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/alice.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/nicole.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/barbeloth.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/octavia.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/andersdotter.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/ivanovna.jpg" class="d-block w-100"></div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#hexenzirkelCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#hexenzirkelCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>

    <p><b>Викрадачі скарбів</b> — Нод-Край є батьківщиною всіх злочинців і злодіїв, що зустрічаються 
    по всьому Тейвату. Десь у північних землях, згідно з легендами, заховано скарб відомого злодія 
    Ріда Міллера.</p>

    <div id="hoardersCarousel" class="carousel slide my-4 shadow rounded overflow-hidden">
      <div class="carousel-inner">
        <div class="carousel-item active"><img src="../assets/img/hoarders.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/Treasure_Hoarders.jpg" class="d-block w-100"></div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#hoardersCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#hoardersCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>

    <p><b>Майстерня крумкаке «Дзинь-Клац»</b> — велика організація, що займається виготовленням різних 
    механізмів для Сніжної. Її засновницею є талановита дівчина, яка колись поставила перед собою 
    мету створити найкращий пристрій для виготовлення вафельних трубочок крумкаке.</p>

    <div id="craftshopCarousel" class="carousel slide my-4 shadow rounded overflow-hidden">
      <div class="carousel-inner">
        <div class="carousel-item active"><img src="../assets/img/craftshop.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/krumkake.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/aino.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/ineffa.jpg" class="d-block w-100"></div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#craftshopCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#craftshopCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>

    <p><b>Гільдія Войнича</b> — об'єднання торговців, що займається організацією безпеки на території 
    Нод-Краю. Наймані бійці захищають місцевих і іноземних підприємців від розбійників, що орудують 
    у регіоні.</p>

    <div id="voynichCarousel" class="carousel slide my-4 shadow rounded overflow-hidden">
      <div class="carousel-inner">
        <div class="carousel-item active"><img src="../assets/img/voynich.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/Voynich_Guild_Teaser.jpg" class="d-block w-100"></div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#voynichCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#voynichCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>

    <p><b>Альви засніженої країни</b> — ельфи, які колись були послідовниками першого Кріо Архонта Сніжної, 
    що походив з цього ж народу. Незважаючи на те, що часи, коли вони правили всім північним регіоном, 
    вже минули, вони досі мають значний вплив на справи королівства.</p>

    <div id="faeCarousel" class="carousel slide my-4 shadow rounded overflow-hidden">
      <div class="carousel-inner">
        <div class="carousel-item active"><img src="../assets/img/SnowlandFae.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/TheSnowlandFae.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/flins.jpg" class="d-block w-100"></div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#faeCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#faeCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>

    <p><b>Діти Морозного Місяця</b> — послідовники богині місяця і нащадки тих, кому в давні часи протегував 
    сам Морозний Місяць. Покинувши цивілізацію після того, як Першопочатковий зруйнував її небесними 
    шипами, вони оселилися на території Нод-Краю і донині ховаються від місцевих жителів і Сніжної.</p>


    <div id="frostmoonCarousel" class="carousel slide my-4 shadow rounded overflow-hidden">
      <div class="carousel-inner">
        <div class="carousel-item active"><img src="../assets/img/Frostmoon.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/Frostmoon1.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/lauma.jpg" class="d-block w-100"></div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#frostmoonCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#frostmoonCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>

    <p><b>Світлоносці</b> — найдавніша організація Нод-Краю, що займалася захистом регіону від сил Безодні 
    та навал Дикого полювання. Зі зростанням ворожих сил воїни фракції значно послабили свої позиції.</p>


    <div id="lightkeepersCarousel" class="carousel slide my-4 shadow rounded overflow-hidden">
      <div class="carousel-inner">
        <div class="carousel-item active"><img src="../assets/img/Lightkeepers.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/Lightkeepers1.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/flins.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/illuga.jpg" class="d-block w-100"></div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#lightkeepersCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#lightkeepersCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>

    <p><b>Дике Полювання</b> — армія Безодні, яка регулярно здійснює набіги на Нод-Край. Невідомо, яких 
    цілей досягають ці воїни, за чутками, вони намагаються щось відшукати.</p>


    <div id="WildHuntCarousel" class="carousel slide shadow rounded overflow-hidden">
      <div class="carousel-inner">
        <div class="carousel-item active"><img src="../assets/img/WildHunt.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/WildHunt1.jpg" class="d-block w-100"></div>
        <div class="carousel-item"><img src="../assets/img/rerir.jpg" class="d-block w-100"></div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#WildHuntCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#WildHuntCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  </section>
</template>

<style scoped>
h2 {
    border-left: 5px solid #0dcaf0;
    padding-left: 15px;
    margin-bottom: 25px;
}

p {
    margin-top: 20px;
    line-height: 1.6;
}

.carousel img {
    max-height: 450px;
    object-fit: cover;
    border-radius: 10px;
}

p b {
    color: #0dcaf0;
}
</style>