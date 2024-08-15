const palavras = [
  "DOG",
  "CAT",
  "COW",
  "HORSE",
  "PIG",
  "SHEEP",
  "CHICKEN",
  "RABBIT",
  "BIRD",
  "FISH",
  "DEER",
  "ELEPHANT",
  "LION",
  "MONKEY",
  "SNAKE",
  "FROG",
  "TURTLE",
  "BEE",
  "ANT",
  "SPIDER",
];

let palavra = "";
let certas = [];
let erros = [];
let contador = 0;

document.getElementById("playButton").addEventListener("click", jogar);
document.getElementById("kickButton").addEventListener("click", chute);
document
  .getElementById("restartButton")
  .addEventListener("click", sortearPalavra);
document.getElementById("exitButton").addEventListener("click", sair);

function jogar() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("jogo").style.display = "block";
  sortearPalavra();
}

function sortearPalavra() {
  palavra = palavras[Math.floor(Math.random() * palavras.length)];
  certas = Array(palavra.length).fill("_");
  erros = [];
  contador = 0;
  atualizarLabel();
  document.getElementById("image").src = "images/7.jpg";
}

function chute() {
  const txtChute = document.getElementById("txtChute").value.toUpperCase();
  document.getElementById("txtChute").value = "";

  if (txtChute) {
    let acertou = false;

    for (let i = 0; i < palavra.length; i++) {
      if (palavra[i] === txtChute) {
        certas[i] = txtChute;
        acertou = true;
      }
    }

    if (!acertou && !erros.includes(txtChute)) {
      erros.push(txtChute);
      trocarImagem();
    }

    atualizarLabel();

    if (!certas.includes("_")) {
      document.getElementById("certas").textContent =
        "Você acertou e escapou da forca!";
      document.getElementById("image").src = "images/1.jpg";
    }
  }
}

function atualizarLabel() {
  document.getElementById("certas").textContent = certas.join(" ");
  document.getElementById("tentativas").textContent =
    "Erros: " + erros.join(" ");
}

function trocarImagem() {
  const imagens = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
  ];

  if (contador < imagens.length) {
    document.getElementById("image").src = imagens[contador];
    contador++;
  }

  if (contador === imagens.length) {
    document.getElementById("certas").textContent = "Você perdeu, é o seu fim!";
  }
}

function sair() {
  window.close();
}
