var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostAnimation;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg=loadImage("tower.png")
  doorImg=loadImage("door.png")
  climberImg=loadImage("climber.png")
  ghostAnimation=loadAnimation("ghost-jumping.png", "ghost-standing.png")

  }

function setup(){
  createCanvas(600,600)
  tower=createSprite(300,300)
  tower.addImage(towerImg)
  tower.velocityY=1
  doorsGroup=new Group()
  climbersGroup=new Group()

  ghost=createSprite(300,300)
  ghost.addAnimation("jumping",ghostAnimation)
  ghost.scale=0.5

  
  

}

function spawnDoors(){
 if(frameCount % 250==0){
  console.log("function spawnDoors called ")

  door=createSprite(Math.round(random(100,500)),-50)
  door.velocityY=1
  door.addImage(doorImg)
  door.lifetime=800
  doorsGroup.add(door)
  ghost.depth=door.depth+1


  climber=createSprite(door.x,door.y+60)
  climber.velocityY=1
  climber.addImage(climberImg)
  climber.lifetime=800
  climbersGroup.add(climber)






  


 }
  
}
 

function draw() {
  background("black")
  if(tower.y>400){
 tower.y=300
  }
  spawnDoors()

  if(keyDown("left")){
    ghost.x=ghost.x-5
  }

  if(keyDown("right")){
    ghost.x=ghost.x+5
  }
 

  

  drawSprites()
 
}

