var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,50,80);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(300, 100, 50, 80);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 80);
  gameObject2.shapeColor = "green";


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  gameObject1.velocityX = -1;
  gameObject2.velocityX = +1;
}

function draw() {
  background(0,0,0);  

  if(isTouching(gameObject1,gameObject2)) {
    gameObject1.shapeColor="red";
    gameObject2.shapeColor="red";

  }

 if(isTouching(fixedRect,gameObject1)){
   fixedRect.shapeColor="blue";
   gameObject1.shapeColor="blue";
 }


  drawSprites();

  bounceOff(movingRect , fixedRect);
  bounceOff(gameObject1 , gameObject2);
}




