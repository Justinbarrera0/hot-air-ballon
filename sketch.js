var balloon,balloonimg;
var database;
var backgroundimg;



function preload(){
backgroundimg=loadImage("Hot Air Ballon-01.png")
balloonimg=loadImage("Hot Air Ballon-02.png")



}
function setup() {
  createCanvas(500,500);
  balloon=createSprite(200, 200, 50, 50);
  balloon.addImage(balloonimg)
  balloon.scale=0.25
}

function draw() {
  background(backgroundimg); 
  if(keyDown(LEFT_ARROW)){
balloon.x=balloon.x -10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x +10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y=balloon.y -10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y=balloon.y +10;
  }
  drawSprites();
}