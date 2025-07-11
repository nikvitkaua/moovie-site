"use strict";

const movieDB = {
    movies: [
        "logan",
        "injustice League",
        "la-la-land",
        "durability",
        "scott pilgrim vs. the world",
    ],
};

const adv = document.querySelectorAll(".promo__adv img"),
      promoGenre = document.querySelector(".promo__genre"),
      promoBg = document.querySelector(".promo__bg"),
      watchedFilms = document.querySelector(".promo__interactive-list");

adv.forEach((item) => {
    item.remove();
});

promoGenre.textContent = "drama";

promoBg.style.backgroundImage = "url('img/bg.jpg')";

watchedFilms.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((movieName, i) => {
    watchedFilms.innerHTML += `
        <li class="promo__interactive-item">#${i + 1} ${movieName}
            <div class="delete"></div>
        </li>
    `;
});
