const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide;
var rightSide;

function preload(){

}

function setup() {
	createCanvas(1000,600);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic = false,
		restitution:0.3
		friction:0,
		density:1.2
	}

	ground =new Ground(width/2,670,width,20);
	rightSide = new Ground(600,1100,120,20);
	leftSide = new Ground(1100,600,20,120);
	


	
	Matter.Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	rectMode(CENTER);
	ellipseMode(RADIUS);

Engine.run(engine);
  
}


function draw() {
background(51);

ellipse(ball.position.x,ball.position.y,20);


  ground.show();
  
  leftSide.show();
  rightSide.show();

if(keyDown(RIGHT_ARROW)){
	hForce();
}

  Engine.update(engine);


  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}


}
