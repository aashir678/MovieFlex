




const movieInfo = document.querySelector(".movie__info")
const spinner = document.querySelector(".movies")
const spinnerShowing = document.querySelector("fa-spinner")


async function submitMovie(event) {
        const searchInput = event.target.value;
        
        const fetchMovie = await fetch(`https://www.omdbapi.com/?apikey=6449adca&s=${searchInput}`);
        const data =  await fetchMovie.json();
       
        spinner.classList += " movies__loading"

        return new Promise(()=> {
             setTimeout (()=> {
                

                if(!data.Search) {


                }

                else if(data.Search) {
                 spinner.classList.remove("movies__loading")
                 movieInfo.innerHTML = data.Search.map ((film)=> {
                     return showMovie(film);
                    }).join("");
                }


             }, 1000)

        })
        // console.log(data)
       
      
    
      
        // event.preventDefault();
    }
    submitMovie();
    
    
//   
    
    function showMovie (film) {
        return `
       
        <div class="movie__results--display">
        <h3 class="result__title"> Title: ${film.Title}  </h3>
        <h4 class="search__year"> Year:  ${film.Year} </h4>
        <img src="${film.Poster}" class="movie__img"> </img>
        </div>

        
        
        `
    }






















    // function filterMovies(filter) {
    //     //     if (filter === "LOW_TO_HIGH") {
    //     //         data.Search.sort((a, b) => a.Year -b.Year);
        
    //     //     }
    //     //    }
        
        
        
            
    //     //      function filterMovies(event) {
    //     //         renderMovies(event.target.value)
    //     //      }