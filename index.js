const movieInfo = document.querySelector(".movie__info");
const spinner = document.querySelector(".movies");
const spinnerShowing = document.querySelector(".fa-spinner");

async function submitMovie(event) {
  const searchInput = event.target.value;
  spinnerShowing.classList += " movies__loading--spinner";

  const fetchMovie = await fetch(
    `https://www.omdbapi.com/?apikey=6449adca&s=${searchInput}`
  );
  const data = await fetchMovie.json();

  return new Promise(() => {
    setTimeout(() => {
      if (!data.Search) {
      } else if (data.Search) {
        spinner.classList.remove("movies__loading");
        movieInfo.innerHTML = data.Search.map((film) => {
          return showMovie(film);
        }).join("");
        spinnerShowing.classList.remove("movies__loading--spinner");
      }
    }, 1000);
  });
}
submitMovie();

function showMovie(film) {
  return `
       
        <div class="movie__results--display">
        <h3 class="result__title"> Title: ${film.Title}  </h3>
        <h4 class="search__year"> Year:  ${film.Year} </h4>
        <img src="${film.Poster}" class="movie__img"> </img>
        </div>
        
        
        `;
}

 async function renderMovies(filter) {
  const fetchMovie = await fetch(
    `https://www.omdbapi.com/?apikey=6449adca&s=${filter}}`
  );
  const data = await fetchMovie.json();

  movieInfo.innerHTML = data.Search.filter((movie)=> {
    if (filter === "LOW_TO_HIGH") {

      data.Search.sort((a, b) => a.Year - b.Year);
    }

  }).join("");
  
 
}

function filterMovies(event) {
  renderMovies(event.target.value);
}
