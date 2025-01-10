function cardGenerate() {
  let simbolos = ['♥', '♠', '♣', '♦'];
  let numeros = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

  let simboloAleatorio = Math.floor(Math.random() * simbolos.length);
  let numeroAleatorio = Math.floor(Math.random() * numeros.length);

  document.querySelector("#arriba").innerHTML = simbolos[simboloAleatorio];
  document.querySelector("#abajo").innerHTML = simbolos[simboloAleatorio];
  document.querySelector("#numero").innerHTML = numeros[numeroAleatorio];

  if (simbolos[simboloAleatorio] === '♦' || simbolos[simboloAleatorio] === '♥'){
  document.querySelector('#arriba').className = 'display-5 text-danger';
  document.querySelector('#abajo').className = 'text-danger';
  } else {
    document.querySelector('#arriba').className = 'display-5';
    document.querySelector('#abajo').className = '';
  }
}

window.onload = function () { cardGenerate();};
setInterval(cardGenerate, 1000);