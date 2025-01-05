import { applyInputRangeStyle } from "./inputRange.js";
import { newDataAlbums } from "./api.js";

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

function rotine(){
  applyInputRangeStyle();
}


const priceCelecionadoTexto = document.getElementById("textInputPrice")
const inputPriceDefiner = document.getElementById("price__difiner")
const containerAlbums = document.querySelector(".albums__list")


async function caregarAlbums() {
  const albums = await newDataAlbums();
  if (albums) {
    return albums;
  }
  return [];
}

async function gerarAlbumsAtualizado(price) {
    containerAlbums.innerHTML = "";
    
    const listAlbuns = await caregarAlbums();
    const filterAlbums = listAlbuns.filter(album => parseFloat(album.price) <= price);

    filterAlbums.forEach(album => {
        const albumItems = document.createElement("li")
        albumItems.classList.add("albums__item");

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

        containerAlbums.appendChild(albumItems)
    });
}

const presoDefinido = inputPriceDefiner.addEventListener(("input"), function() {
    const fodase = priceCelecionadoTexto.textContent = this.value
    gerarAlbumsAtualizado(parseFloat(fodase))
}, 300);


rotine();

gerarAlbumsAtualizado(parseFloat(inputPriceDefiner.value));