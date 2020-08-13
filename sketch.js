var car;
var wall;
var speed, weight;
function setup() {
  createCanvas(1200,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50, 200, 50, 50);
car.shapeColor = color(255,255,255);
  wall = createSprite(1100, 200, 10, 100);
  wall.shapeColor= color(225,225,225);
car.velocityX = speed;
 
}

function draw() {
  background(0,0,0);
 if(wall.x-car.x < (car.width+wall.width/2)){
  car.collide(wall);  
  var deformation = (0.5*weight*speed*speed)/22500
 if(deformation<100){
     car.shapeColor = color(0,255,0);
   }
   if(deformation>180){
    car.shapeColor = color(255,0,0);
  }
  if(deformation>100&&deformation<180){
    car.shapeColor = color(230,230,0);
  }

 }

  drawSprites();
} 