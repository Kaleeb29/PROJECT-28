const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,stand;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var polygon,slingShot;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400, 200, 50, 50);
  stand = new Ground(500,200,60,10);

  block1 = new Box();
  block2 = new Box();
  block3 = new Box();
  block4 = new Box();
  block5 = new Box();
  block6 = new Box();
  block7 = new Box();
  block8 = new Box();
  block9 = new Box();

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new Slingshot(this.polygon,{x:100,y:200});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  drawSprites();
}