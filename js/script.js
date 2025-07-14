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
    watchedFilms = document.querySelector(".promo__interactive-list"),
    addFilmForm = document.querySelector(".add"),
    addFilmInput = addFilmForm.querySelector(".adding__input"),
    addFilmSubmit = addFilmForm.querySelector("button"),
    addFilmFavorite = addFilmForm.querySelector("[data-favorite]");

adv.forEach((item) => {
    item.remove();
});

promoGenre.textContent = "drama";

promoBg.style.backgroundImage = "url('img/bg.jpg')";

addFilmSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    if (addFilmFavorite.checked) {
        console.log('Add to favorite')
    }
    
    if (addFilmInput.value.length > 0) {
        movieDB.movies.push(addFilmInput.value.toLowerCase());
        addFilmInput.value = "";
    }

    showWatchedFilms();
});


function showWatchedFilms() {
    watchedFilms.innerHTML = "";

    movieDB.movies.sort();

    movieDB.movies.forEach((movieName, i) => {
        if (movieName.length > 20) {
            movieName = movieName.slice(0, 21) + "...";
        }

        watchedFilms.innerHTML += `
            <li class="promo__interactive-item">#${i + 1} ${movieName}
                <div class="delete"></div>
            </li>
        `;
    });

    deleteMovieFromList();
}

showWatchedFilms();


function deleteMovieFromList() {
    document.querySelectorAll(".delete").forEach((delBtn) => {
        delBtn.addEventListener("click", (e) => {
            let item = e.target.parentElement.textContent.trim();
            item = item.split(" ");
            item = item.slice(1).join(" ");

            movieDB.movies.splice(movieDB.movies.indexOf(item), 1);
            
            showWatchedFilms();
        });
    });
}