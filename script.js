let nome = document.querySelector("h1");
let personagem = document.querySelector("#imgBig");

function mudarImagem(pers, cor, img) {
  nome.innerHTML = pers;
  nome.style.color = cor;
  personagem.src = img;
}

// function mudarImagem(pers) {
//     if (pers == "jason") {
//       nome.innerHTML = "Jason";
//       nome.style.color = "#2db8e6"
//       personagem.src = "img/jason.png";
//     } else if (pers == "lucia") {
//       nome.innerHTML = "Lucia";
//       nome.style.color = "#ff0995"
//       personagem.src = "img/lucia.png";
//     } else if (pers == "cj") {
//       nome.innerHTML = "CJ";
//       nome.style.color = "#009a00"
//       personagem.src = "img/cj.png";
//     }
//   }
  