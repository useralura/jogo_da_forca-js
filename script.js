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
    document.getElementById("txtChute").style.display = "none"; // Esconde a caixa de texto
    document.getElementById("kickButton").style.display = "none"; // Esconde o botão "kick"

    // Move o botão "Restart" para baixo da imagem
    const restartButton = document.getElementById("restartButton");
    restartButton.style.display = "block";
    restartButton.style.marginTop = "20px";
  }
}

function sortearPalavra() {
  palavra = palavras[Math.floor(Math.random() * palavras.length)];
  certas = Array(palavra.length).fill("_");
  erros = [];
  contador = 0;
  atualizarLabel();
  document.getElementById("image").src = "images/7.jpg";

  document.getElementById("txtChute").style.display = "inline"; // Mostra a caixa de texto
  document.getElementById("kickButton").style.display = "inline"; // Mostra o botão "kick"
  document.getElementById("restartButton").style.display = "none"; // Esconde o botão "Restart"
}
