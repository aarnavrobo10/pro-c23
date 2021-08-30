const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var man1,man2;
var ground1,ground2;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   man1 = createImg('./assets/player.png')
   man1.position(width/1.5,height/2);
   man1.size(90,200);

   man2 = createImg('./assets/player.png')
   man2.position(width/4,height/2);
   man2.size(90,200);


   ground1 = createImg('./assets/base1.png')
   ground1.position(width/1.535,height/1.325);
   ground1.size(200,200);

   ground2 = createImg('./assets/base2.png')
   ground2.position(width/5.535,height/1.325);
   ground2.size(200,200);


  }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 


   //display Player and computerplayer


}
