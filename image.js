// Imagens do jogo

let imageRoad;
let imageActor;
let imageCarGreen;
let imageCarGray;
let imageCarYellow;

// Sons do jogo
let soundColision;
let soundPoint;
let soundMusicTrack;


function preload() 
{
  imageRoad = loadImage("Pictures/estrada.png");
  imageActor = loadImage("Pictures/ator-1.png");
  imageCarGreen = loadImage("Pictures/carro-4.png");
  imageCarGray = loadImage("Pictures/carro-5.png");
  imageCarYellow = loadImage("Pictures/carro-6.png");
  
  imageCars = [imageCarGreen, imageCarGray, imageCarYellow, imageCarGreen, imageCarGray, imageCarYellow];

  soundColision = loadSound("Sound/colidiu.mp3");
  soundPoint = loadSound("Sound/pontos.wav");
  soundMusicTrack = loadSound("Sound/trilha.mp3");
}
