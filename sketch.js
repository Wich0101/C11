var ship, ship_movement;
var sea, seaImg;

function preload(){
  seaImg = loadImage("sea.png");
  ship_movement = loadAnimation("ship-1.png", "ship-2.png");
}

function setup(){
  createCanvas(2000,1000);
  
  //Crear sprite para el fondo
  sea = createSprite(200,200,10,10);
  sea.addImage(seaImg);
  sea.velocityX = 1;

  //Crear sprite para el barco
  ship = createSprite(500,500,10,10);
  ship.addAnimation("movement", ship_movement);
  ship.scale = 0.6;
}

function draw() {
  background("lightblue");
 
  if(sea.x <0){
    sea.x=sea.width/2;

  }

  drawSprites();
}