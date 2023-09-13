//variáveis ator
let xAtor = 110;
let yAtor = 322;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
   image(imagemDoAtor, xAtor, yAtor, 22, 22);
 }

function movimentaAtor(){
  if(keyIsDown (UP_ARROW)){
    yAtor -= 2;
  }
  if (keyIsDown (DOWN_ARROW)){
    if (podeSeMover()){
    yAtor += 2;
    }
  }
  if (keyIsDown (LEFT_ARROW)){
    xAtor -= 3;
  }
  if (keyIsDown (RIGHT_ARROW)){
    xAtor += 3;
  }
}

function verificaColisao(){
  for (let i = 0; i < imagensCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], 25, 25, xAtor, yAtor, 22)
    if (colisao){
      voltaAtorPosicaoInicial();
      somColisaoCarros.play();
      if (pontosMaiorQueZero()){
      meusPontos -= 1;
    }
    }
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 322;
}

function incluiPontos(){
  textAlign (CENTER);
  textSize (28);
  textLeading(10);
  fill (color(255, 0, 0));
  text (meusPontos, width / 5, 25);
}

function marcaPontos(){
  if (yAtor < 24){
    meusPontos += 1;
    somPontos.play();
    voltaAtorPosicaoInicial();
    }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 322;
}




