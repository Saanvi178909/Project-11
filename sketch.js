function preload(){
  seaImg=loadImage("sea.png")
  shipImg1=loadAnimation("ship-3.png", "ship-4.png")

}

function setup(){
  createCanvas(400,400);
  ship=createSprite(195,160,20,50)
  ship.addAnimation(shipImg1);
  sea=createSprite(200,200,0,0)
  sea.addImage(seaImg);
sea.x=5
}

function draw() {
  background("blue");
 if(sea.x <0){
   sea.x= sea.width/2;
 }
 drawSprites();
}