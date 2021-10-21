function setup() {
  createCanvas(800,400);

  alienGroup = new Group();
  bulletGroup = new Group();

  rocket = createSprite(300,400,50,20);
}

function draw() {
  background("green");  
  drawSprites();

  if(keyDown(DOWN_ARROW)){
    rocket.velocityY = 5
  }

  if(keyDown(UP_ARROW)){
    rocket.velocityY = -5
  }

  if(keyWentDown("SPACE")){
    spawnBullets();
  }

  spawnAliens();
}



function spawnAliens(){
  if(frameCount % 100 == 0){
    alien = createSprite(width - 20, random(height-500, height - 100));
    alien.velocityX = -3
    alienGroup.add(alien);

    alien.lifetime = 300;

  }
}

function spawnBullets(){
  bullet = createSprite(rocket.x + 20, 300, 20, 10);
  bullet.velocityX = 5;
  bulletGroup.add(bullet);
}