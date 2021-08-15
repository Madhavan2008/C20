var car,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
 car=createSprite(100, 200, 100, 50);
 car.shapeColor="white"
 wall=createSprite(1500,200,60,height/2);
 wall.shapeColor=rgb(80,80,80);
 speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
  console.log("Velocity"+car.velocityX);
}

function draw() {
  background("Black"); 
  if(car.isTouching(wall)){
    car.velocityX=0;
    deformation=0.5*weight*speed*speed/22500;
    if(deformation>180){
      car.shapeColor="Red"
    }
    else if(deformation>100){
     car.shapeColor="Yellow"
    }
    else{
      car.shapeColor="Green"
    }
  }
  drawSprites();
}