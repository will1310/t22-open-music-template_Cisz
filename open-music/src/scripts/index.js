import { applyInputRangeStyle } from "./inputRange.js";
import { albumList } from "./albumsDatabase.js";

function rotine(){
    applyInputRangeStyle();
    gerarAlbums("Todos");
}

rotine();


const genresButton = document.querySelectorAll(".generos__button");

genresButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    genresButton.forEach((btn) => {
      btn.classList.remove("celecionado");
    });
    button.classList.add("celecionado");
  });
});

const genre = genresButton.querySelector('p').innerText;

function gerarAlbums(genero) {
    const listAlbuns = document.querySelector(".albums__list")
    listAlbuns.innerHTML = "";
    
   
    const filterAlbums = genero === "Todos" ? albumList : albumList.filter(album => album.genre === genre);

    filterAlbums.forEach(album =>{
        const albumItems = document.createElement("li")
        albumItems.className = "albums__item";

        albumItems.innerHTML = `
        <img src="${album.img}" alt="Capa do álbum ${album.title}">
            <div class="albums__item--title">
              <h3>${album.title}</h3>
            </div>
            <div class="albums__item--info">
              <p>${album.band}</p>
              <label for="generos__lista">${album.genre}</label>
            </div>
            <div class="albums__item--pricing">
              <h3> R$ ${album.price}</h3>
              <button class="albums__buy--button">Comprar</button>
            </div>
        `;

        listAlbuns.appendChild(albumItems);
    });
}