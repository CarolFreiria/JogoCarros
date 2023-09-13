let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let somDaTrilha;
let somColisaoCarros;
let somPontos;

function preload(){
  imagemDaEstrada = loadImage ("Imagens/estrada.png");
  imagemDoAtor = loadImage ("Imagens/ator-1.png")
  imagemCarro1 = loadImage("Imagens/carro-1.png");
  imagemCarro2 = loadImage("Imagens/carro-2.png");
  imagemCarro3 = loadImage("Imagens/carro-3.png");
  imagensCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3]
  
  somDaTrilha = loadSound ("Sons/trilha.mp3");
  somColisaoCarros = loadSound ("Sons/colidiu.mp3")
  somPontos = loadSound ("Sons/pontos.wav")
}

