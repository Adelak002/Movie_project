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

  j = 0; 
  for (let i = 0; i < movies.length; i++) {

    let div = document.createElement('div')
    let path = "https://image.tmdb.org/t/p/original";
    let image = movies[i].backdrop_path;
    let title = movies[i].original_title;
     console.log(image);

    if (movies[i].original_title != undefined
      ) { 
        
        
        div.classList.add('column');
        
        div.innerHTML = `
        <img src=" ${path}${image}" alt="">

<div class="centered">${title}</div>
        
<h3 class="title"> ${title}</h3>
<div class="icons">
    <i class="fa-regular like fa-thumbs-up"></i>
    <i class="fa fa-share-nodes"></i>

</div>
      `
      row.append(div);

let like_movie = document.querySelectorAll('.like');

like_movie[j].onclick = function (){
  this.classList.toggle("fa-thumbs-up")
  this.classList.toggle("fa-thumbs-down")
  
}



    j++;
    }
    
  } 
}









