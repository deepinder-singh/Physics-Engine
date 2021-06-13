const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true

  }

var ball_object = {

  restitution: 1.0
}


  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world, ground);

  ball = Bodies.circle(200,100,20, ball_object);
  World.add(world, ball);
  console.log(ground);

}

function draw() {
 background("Black");  

Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,20);

  ellipseMode(RADIUS);
  fill("White");
  ellipse(ball.position.x,ball.position.y,20,20);

 
  
}