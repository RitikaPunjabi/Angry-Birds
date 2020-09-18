const ENGINE=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

function setup() {
  createCanvas(1200,400);
  engine=ENGINE.create();
  world=engine.world;
  object=Bodies.rectangle(200,100,50,50);
  World.add(world.object);
}

function draw() {
  background(0);  
 rectMode(CENTER);
  var rect=createSprite(200, 200, 50, 50);

  drawSprites();
}