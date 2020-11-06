var car,wall

var speed,weight

function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 210, 50, 30);
  wall = createSprite(1500, 200, 60, height/2);

  speed=random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;

}

function draw() {
  background("black");  
  
  if(wall.x - car.x < car.width/2 + wall.width/2){
     
     car.velocityX = 0;

     var deformation = 0.5*weight*speed*speed/22500

     if(deformation > 180){
       car.shapeColor = "red";

     }

     if(deformation < 100){
      car.shapeColor = "green";

    }

    if(deformation < 180 && deformation > 100){
      car.shapeColor = "yellow";

    }
      console.log(deformation);
 }

  drawSprites();
}