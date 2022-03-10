const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope,rope1,rope2;
var fruit_con;
var boton;

var bg_img;
var food;
var rabbit;

function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbit = loadImage('Rabbit-01.png');
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
conejo = createSprite(250,650,100,100);
conejo.addImage(rabbit);
conejo.scale=0.3;
boton=createImg("cut_button.png");
boton.position(245,30);
boton.size(20,20);
boton.mouseClicked(drop);
  rope = new Rope(7,{x:245,y:30});
rope1=new Rope()

  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);

  image(bg_img,width/2,height/2,490,690);

  image(food,fruit.position.x,fruit.position.y,70,70);
  rope.show();
  Engine.update(engine);
  ground.show();

 drawSprites();
   
}
function drop() {
  rope.break();
  fruit_con.destruir;
  fruit_con=null;
}