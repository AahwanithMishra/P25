
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var box1, box2, box3;
var paper1, paperImage;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	paper1= new paper(100,660,40)

	box1=createSprite(500,660,100,20);
	box1.shapeColor=color(255,0,0);

	box2=createSprite(450,620,20,100);
	box2.shapeColor=color(255,0,0);

	box3=createSprite(550,620,20,100);
	box3.shapeColor=color(255,0,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


  rect(ground.position.x,ground.position.y, width,10);

  drawSprites();
 paper1.display();

	Engine.update(engine);
}
function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,	{x:85,y:-85}); 
	}
}



