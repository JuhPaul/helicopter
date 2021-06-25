var helicopter,packageSprite,bombpackage
var helicopterIMG,packageIMG,bombpackageIMG
var mountainsI
var blast,blastIMG
var score,scoreB,scoreI;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	mountainsI=loadImage("mountain.png")
	bombpackageIMG=loadImage("bombpackage.png")
	blastIMG=loadImage("bang'.png")
	scoreI=loadImage("scoreBoard.png")
}

function setup() {
	createCanvas(1200, 500);
	
	helicopterSprite=createSprite(200, 250, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.setCollider("rectangle",0,0,150,150)
	helicopterSprite.debug=false
	
	packageGroup= createGroup();
	bombpackageGroup= createGroup();
	
	scoreB=createSprite(1100,10,10,10)
    scoreB.addImage(scoreI)
	scoreB.scale=0.1
	score = 0;
}

function draw() {
 	background(mountainsI);
	  
	if (keyCode === UP_ARROW) {
		helicopterSprite.y = helicopterSprite.y-3;
	}
	if (keyCode === DOWN_ARROW) {
		helicopterSprite.y = helicopterSprite.y+3;
	}
    if (helicopterSprite.isTouching(packageGroup)){
		score = score+1
	}
	if (helicopterSprite.isTouching(bombpackageGroup)){
		helicopterSprite.destroy();
		blast=createSprite(600,250,10,10)
		blast.addImage(blastIMG)
		blast.scale=0.06
		packageGroup.setVelocityXEach(0)
		bombpackageGroup.setVelocityXEach(0)
	}
	spawnboxes();
	spawnbombboxes();
    drawSprites();
	fill("blue")
	textSize(20)
	text("Score: "+ score, 1020,30);
    }

function spawnboxes(){
	if(frameCount %80 === 0){
	packageSprite=createSprite(1300, 10, 10,10);
	packageSprite.velocityX=-7
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.y=Math.round(random(100,400))
	packageSprite.lifetime=500
	packageGroup.add(packageSprite)
	}
}
function spawnbombboxes(){
	if(frameCount %360 === 0){
	bombpackage=createSprite(1300, 10, 10,10);
	bombpackage.velocityX=-7
	bombpackage.addImage(bombpackageIMG)
	bombpackage.scale=0.2
	bombpackage.y=Math.round(random(100,400))
	bombpackage.lifetime=500
	bombpackageGroup.add(bombpackage)
	}
}