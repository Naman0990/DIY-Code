var gameState = 'start' 
let leftship;
let rightship;
let Debris;
var divider;
var obstaclesGroup;
var laser1, laser2
var laser_img
var blast;
var laser1Group, laser2Group;

function preload() {
  ship_img= loadImage ('Sprites/Spaceship.png')
  Debris_img = loadImage ('Sprites/Debris3.png')
  laser_img = loadImage ('Sprites/laser.png')
  blast_img = loadImage ('Sprites/blast.png')
}
function setup() {
  createCanvas(1000, 500);
  console.log(displayWidth + "," + displayHeight);
  //createSprite(400, 200, 50, 50);
  leftship = createSprite(150, 420, 50, 50)
  leftship.scale = 0.3
  rightship = createSprite(740, 420, 50, 50)
  rightship.scale = 0.3
  leftship.addImage(ship_img)
  rightship.addImage(ship_img)
  divider = createSprite(500, 250, 2, 500)
  obstaclesGroup = new Group ();
  

//laser2.visible = false;
}
function shootlaser1(){
  laser1 = createSprite (170, 420)
  laser1.addImage (laser_img); 
laser1.scale = 0.05
laser1Group.add(laseer1)
//laser1.visible = false;
}
function shootlaser2(){
  laser2 = createSprite (760, 420)
  laser2.addImage (laser_img); 
laser2.scale = 0.05
laser2Group.add(laseer2)
}
function draw() {
  background(0); 

  if (keyDown("SPACE")){
    //laser1.visible = true;
    shootlaser1();
   gameState = 'activate'
  }
  if (keyDown("x")){
   // laser2.visible = true;
    shootlaser2();
   gameState = 'activate'
  }
  if (gameState === 'activate'){
   // laser1.y = laser1.y-2
   laser1.velocityY = -2
    if (laser1.isTouching(obstaclesGroup)){
      laser1.addImage (blast_img)
      laser1.scale =0.2
      laser1.velocityY = 0
      gameState = 'start'
      
    }
    if (laser2.isTouching(obstaclesGroup)){
      laser2.addImage (blast_img)
      laser2.scale =0.2
      laser2.velocityY = 0
      gameState = 'start'
      
    }
  }
  if (keyDown(LEFT_ARROW)){
    leftship.x = leftship.x-2
    if (gameState!== 'activate'){
      laser1.x = leftship.x+18
      }
 }
 if (keyDown(RIGHT_ARROW)){
  leftship.x = leftship.x+2
  if (gameState!== 'activate'){
    laser1.x = leftship.x+18
    }
}
if (keyDown(UP_ARROW)){
  leftship.y = leftship.y-2
  if (gameState!== 'activate'){
    laser1.y = leftship.y
    }
  }
if (keyDown(DOWN_ARROW)){
  leftship.y = leftship.y+2
  if (gameState!== 'activate'){
    laser1.y = leftship.y
    }}

if (keyDown('a')){
  rightship.x = rightship.x-2
  if (gameState!== 'activate'){
    laser2.x = leftship.x+18
    }
}
if (keyDown('s')){
  rightship.x = rightship.x+2
  if (gameState!== 'activate'){
    laser2.x = leftship.x+18
    }
}
if (keyDown('w')){
  rightship.y = rightship.y-2
  if (gameState!== 'activate'){
    laser2.y = leftship.y
    }
  
}
if (keyDown('d')){
  rightship.y = rightship.y+2
  if (gameState!== 'activate'){
    laser1.y = leftship.y
    }
}
 // stroke("255")
 // line((displayWidth-330)/2, 0, (displayWidth-330)/2, (displayHeight- 300))
spawnObstacles();
if (obstaclesGroup.isTouching(laser1)){
  laser1.addImage(blast_img)
  laser1.lifetime = 10;
}
if (obstaclesGroup.isTouching(laser2)){
  laser2.addImage(blast_img)
  laser2.lifetime = 10;
}
obstaclesGroup.bounceOff(divider)
drawSprites();
}
 function spawnObstacles() {
   var rand = Math.round(random(1, 2))
   if (rand === 2){
    if(frameCount %80 === 0){
      var obstacle = createSprite(1000, random(50, 300))
      obstacle.addImage (Debris_img)
      obstacle.scale = 0.2;
      obstacle.velocityX = -2;
      obstaclesGroup.add(obstacle);
   }
  }
 if (rand === 1){
 if(frameCount %80 === 0){
   var obstacle = createSprite(0, random(50, 300))
   obstacle.addImage (Debris_img)
   obstacle.scale = 0.2;
   obstacle.velocityX = 2;
   obstaclesGroup.add(obstacle);
obstacle.debug = true;
  }
}
 }
