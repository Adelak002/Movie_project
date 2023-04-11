let movies = []
const list = document.createDocumentFragment();
function load() {
    
let url = 'https://api.themoviedb.org/3/trending/all/day?api_key=f7e65740c28f0e6ddf5f412c8e4df4f8';
fetch(url)
.then((response) => {
  return response.json();
})
.then((data) => {
  let movie = data;
  showmovie(data.results)
   console.log(data.results)
})
}
load()

let row = document.getElementById('row')

function showmovie(movies) {
  
  for (let i = 0; i < movies.length; i++) {

    let div = document.createElement('div')
    let path = "https://image.tmdb.org/t/p/original";
    let image = movies[i].backdrop_path;
    let title = movies[i].original_title;
     

    if (movies[i].original_title != undefined
      ) { 
        
        div.classList.add('column');

        
        div.innerHTML = `     
      <img src="${path}${image}" alt="" class="imge">
      <div class="hide" >
          <div class="icons">
              <div class="part1">
          <button class="play"> <i class="fa-solid fa-play"></i></button>
          <button class="add"><i class="fa-solid fa-plus"></i></button>
          <button class="like"><i class="fa-solid fa-thumbs-up"></i></button>
      </div>
      <div class="part2">
          <button class="more_info">
              <i class="fa-solid fa-chevron-down"></i> 
          </button> 
      </div>
      </div>
  <div class="title">
  <h3>${title.substr(0,14)} ${title.length >= 14 ?'...':''} </h3>
  </div>
  <div class="footer">  
      <ul>
          <li>Offbeat</li>
          <li>Romamtic</li>
          <li>Musical</li>
      </ul>
  </div>
  
  
      </div>`
    
      row.append(div);
    }
    
  }
}





