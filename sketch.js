
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var tree;
var stone;
var mango1,mango2,mango3,mango4,mango5;
var boy;
var slingShot;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);

  ground=new Ground(340,690,920,10)
  
  tree=new Tree(750,500)

	stone=new Stone(130,570)
	mango1=new Mango(650,350)
	mango2=new Mango(570,420)
	mango3=new Mango(710,390)
	mango4=new Mango(740,460)
	mango5=new Mango(620,480)

	
	boy=new Boy(200,640);

	slingShot = new SlingShot(stone.body,{ x: 130, y: 570 } );
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");

  ground.display();

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  boy.display();

  stone.display();

  slingShot.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  drawSprites();
 
}
function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

    slingShot.fly();

}

/*/function detectCollision(object1,object2){
mangoBodyPosition=object1.body.position;
stoneBodyPosition=object2.body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

if(distance<=object1.r+object2.r){
Matter.Body.setStatic(object1.body,false)

}
}/*/

function detectCollision(lstone,lmango){ 
  var stoneBodyPosition = lstone.body.position; 
  var mangoBodyPosition = lmango.body.position; 

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y); 

  if(distance<=lstone.radius+lmango.radius)
  { Matter.Body.setStatic(lmango.body,false); 
  }
 }


