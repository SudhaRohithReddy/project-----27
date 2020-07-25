var bob1;
var roof;
var rope;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(350,200,400,20);
	bob1 = new Bob(50,700,40);
	rope = new Rope(roof.body,bob1.body);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  roof.display();
  bob1.display();
  
  drawSprites();
 
}



