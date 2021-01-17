const Engine = Matter .Engine
const World = Matter .World
const Bodies = Matter .Bodies

var engine, world, obj1, obj2;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  

  box1 = new Box(200,10,50,50);
  box2 = new Box(100,20,50,50);
  ground1 = new ground(10,390,900,20);

}

function draw() {
  background("pink"); 
  Engine.update(engine);
 
 
box1.display();
box2.display();
ground1.display();

}