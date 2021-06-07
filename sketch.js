const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg;
var peng;
var gr;
var snowfall1,snowfall2,snowfall3,snowfall4,snowfall5,snowfall6,snowfall7,snowfall8,snowfall9;
var music;

function preload(){
  bg = loadImage("snow3.jpg");
  music = loadSound("song.mp3");
}

function setup(){
  var canvas = createCanvas(999,721);
  engine = Engine.create();
  world = engine.world;

  peng = new penguin(800,690,100,100);
  gr = new ground(499.5,700,999,1);
  snowfall1 = new snow(200,0,50);
  snowfall2 = new snow(100,0,50);
  snowfall3 = new snow(240,0,50);
  snowfall4 = new snow(300,0,50);
  snowfall5 = new snow(420,0,50);
  snowfall6 = new snow(800,0,50);
  snowfall7 = new snow(700,0,50);
  snowfall8 = new snow(600,0,50);
  snowfall9 = new snow(520,0,50);

  Engine.run(engine);
}

function draw(){
  gr.display();

  background(bg);
  Engine.update(engine);

  peng.display();

  snowfall1.display();
  snowfall2.display();
  snowfall3.display();
  snowfall4.display();
  snowfall5.display();
  snowfall6.display();
  snowfall7.display();
  snowfall8.display();
  snowfall9.display();

  if(gr.x>0){
  music.play();
  }
  }

  function keyPressed(){
    if(keyCode === UP_ARROW){
    peng.jump(peng.body,peng.velocity.x(-12));
    }
  }