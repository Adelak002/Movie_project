let movies = []
const list = document.createDocumentFragment();
function load() {
    
let url = 'https://api.themoviedb.org/3/trending/all/day?api_key=f7e65740c28f0e6ddf5f412c8e4df4f8';
fetch(url)
.then((response) => {
  return response.json();
})
.then((data) => {
  let authors = data;
  console.log(authors)
})
}

load()

function movie(movies) {
    let row = document.getElementById('row')
    for (let indei = 0; i < array.length; i++) {
       let div = document.createElement('div')
    //    let path = 'https://image.tmdb.org/t/p/w500';

        //  const img = movies[i].backdrop_path;
         const date = movies[i].release_date;
         
        div.innerHTML =
        ` <div class="column">
        <div class="pic">
        <img src="${path}${img}" class-"movie-img">
        </div>
        <h2 class-"movie-title">${movies[i].title}</h2>

        <span class-"movie-price">${path} ${date} </span>
       </div>`;

       row.append(div);
       console.log(movies)
    }
}




