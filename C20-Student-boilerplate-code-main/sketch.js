
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ball2
var ground2
var angle = 10 

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  
   var ground_options ={
     isStatic: true
   };
   var ball2_options ={
     restitution: 1.2 ,
     frictionAir: 0.01
       }
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(150,50,30,ball2_options);
  World.add(world,ball2);

  ground2 = Bodies.rectangle(200,200,100,20,ground_options)
  World.add(world,ground2)

  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball2.position.x,ball2.position.y,30)
  Matter.Body.rotate(ground2,angle)
  push()
  translate(ground2.position.x,ground2.position.y)
  rotate(angle)
  rect(0,0,100,20)
  pop()
  angle = angle + 2
  

}

