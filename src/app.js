function cardGenerate() {
  const simbolos = ["♥", "♠", "♣", "♦"];
  const numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const simboloAleatorio = Math.floor(Math.random() * simbolos.length);
  const numeroAleatorio = Math.floor(Math.random() * numeros.length);

  document.querySelector("#arriba").innerHTML = simbolos[simboloAleatorio];
  document.querySelector("#abajo").innerHTML = simbolos[simboloAleatorio];
  document.querySelector("#numero").innerHTML = simbolos[numeroAleatorio];
  let isRed =
    simbolos[simboloAleatorio] == "♦" || simbolos[simboloAleatorio] == "♥";
}
