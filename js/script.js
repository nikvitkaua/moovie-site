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
    addFilmFavorite = addFilmForm.querySelector("[data-favorite]");

const deleteAdv = (arr) => {
    arr.forEach((item) => {
        item.remove();
    });
}

const makeChanges = () => {
    promoGenre.textContent = "drama";

    promoBg.style.backgroundImage = "url('img/bg.jpg')";
}

const sortArr = (arr) => {
    arr.sort();
}

addFilmForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (addFilmFavorite.checked) {
        console.log('Add to favorite')
    }
    
    if (addFilmInput.value) {
        movieDB.movies.push(addFilmInput.value.toLowerCase());
        addFilmInput.value = "";
    }

    showWatchedFilms(movieDB.movies, watchedFilms);
});

function showWatchedFilms(films, parent) {
    parent.innerHTML = "";

    sortArr(films);

    films.forEach((movieName, i) => {
        if (movieName.length > 20) {
            movieName = movieName.slice(0, 21) + "...";
        }

        parent.innerHTML += `
            <li class="promo__interactive-item">#${i + 1} ${movieName}
                <div class="delete"></div>
            </li>
        `;
    });

    document.querySelectorAll(".delete").forEach((delBtn, i) => {
        delBtn.addEventListener("click", () => {
            films.splice(i, 1);
            delBtn.parentElement.remove();

            showWatchedFilms(films, parent);
        });
    });
}

deleteAdv(adv);
makeChanges();
showWatchedFilms(movieDB.movies, watchedFilms);
