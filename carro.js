//variáveis carro
let xCarros = [690, 670, 600, 650, 610, 630];
let yCarros = [285, 235, 190, 40, 90, 135];
let velocidadeCarros = [5.5, 4.2, 5, 4.5, 4.2, 5.8];


function mostraCarros(){
  for (let i = 0; i < imagensCarros.length; i++ ){
    image(imagensCarros[i], xCarros[i], yCarros[i], 25, 25);
  }
}

function movimentaCarros(){
  for (let i = 0; i < imagensCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
 }

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagensCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < - 50;
}
  
