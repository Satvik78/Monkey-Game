var bananaImage,obstacleImage,obastacleGroup,background,score;
  
function preload(){
  backImage=loadImage("jungle.png");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  
  bananaImage = loadImage("Banana.png");
  obastacle_img = loadImage("stone.png");
}


function setup() {
  createCanvas(400, 400);
  
  backImage = addImage("jungle.png");
  background.velocityX = 2;
  
  ground.visiblity = false;
  
  player_running = setAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
}

function draw() {
  background(220);
  
  if(foodGroup.isTouching(player)){
     score+2;
    foodGroup.destroy();
     }
  
}