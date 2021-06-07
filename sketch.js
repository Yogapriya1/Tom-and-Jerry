var BG, BGImg;
var tom, tomImg1, tomWalking, tomImg2;
var jerry, jerryImg1, jerryTeasing, jerryImg2;
function preload() {
    BGImg = loadImage("images/garden.png")
    tomImg1 = loadAnimation("images/cat1.png")
    tomWalking = loadAnimation("images/cat2.png", "images/cat3.png")
    tomImg2 = loadAnimation("images/cat4.png")
    jerryTeasing = loadAnimation("images/mouse2.png","images/mouse3.png")
    jerryImg2 = loadAnimation("images/mouse1.png")
    jerryImg3 = loadAnimation("images/mouse2.png")    
}

function setup(){
    createCanvas(1000,800);
    BG = createSprite(500,400,1000,800)
    BG.addImage(BGImg)
    jerry = createSprite(150,600,20,20);
    jerry.addAnimation("jerry",jerryImg3);
    jerry.scale = 0.2
  jerry.debug = true
    tom = createSprite(800,600,20,20)
    tom.addAnimation("tom",tomImg1);
    tom.scale = 0.2

}

function draw() {

    background("BGImg");
   if(tom.x - jerry.x < (tom.width - jerry.width)/2){
     tom.velocityX = 0
     jerry.addAnimation("jerryGift",jerryImg2)
     jerry.changeAnimation("jerryGift")
     tom.addAnimation("tomKind",tomImg2)
     tom.changeAnimation("tomKind")
     tom.x = 300
   }

    drawSprites();
}


function keyPressed(){

  if(keyCode === RIGHT_ARROW){
    jerry.addAnimation("jerryTeasing",jerryTeasing)
    jerry.changeAnimation("jerryTeasing")
    jerry.frameDelay = 25;

    tom.changeAnimation("tom");
  }
  
  if(keyCode === LEFT_ARROW){
    tom.addAnimation("catRunning",tomWalking)
    tom.changeAnimation("catRunning")
    tom.velocityX = -4

    jerry.addAnimation("jerryTeasing",jerryTeasing)
    jerry.changeAnimation("jerryTeasing")
    jerry.frameDelay = 25;
  }


}