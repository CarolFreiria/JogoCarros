function setup() {
  somDaTrilha.loop();
  createCanvas(600, 350);
  }

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarros();
  movimentaAtor();
  movimentaCarros();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
 }
