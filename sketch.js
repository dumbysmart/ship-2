var boat, boat_rocking
var sea

function preload(){
boat_rocking=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  bg=createSprite(200,200,400,400)
  bg.addImage(sea)
  boat=createSprite(200,200,50,50)
  boat.addAnimation("rocking", boat_rocking)
  
  boat.scale=0.2
  bg.scale=0.3
  bg.velocityX=4
}

function draw() {
  background("blue");
  if (bg.x>400){
    bg.x=10
  }
  drawSprites()
}