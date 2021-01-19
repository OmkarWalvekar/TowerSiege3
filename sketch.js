const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5;
var box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15;
var polygon;
var chain;
var ground;
var score;

function preload() {
    
}

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    score = 0;

    box1 = new Box(500,270,40,30);
    box2 = new Box(550,270,40,30);
    box3 = new Box(600,270,40,30);
    box4 = new Box(650,270,40,30);
    box5 = new Box(700,270,40,30);

    box6 = new Box(525,235,40,30);
    box7 = new Box(575,235,40,30);
    box8 = new Box(625,235,40,30);
    box9 = new Box(675,235,40,30);

    box10 = new Box(547,200,40,30);
    box11 = new Box(597,200,40,30);
    box12 = new Box(647,200,40,30);

    box13 = new Box(572,165,40,30);
    box14 = new Box(622,165,40,30);

    box15 = new Box(597,130,40,30);

    polygon = new Polygon(200,200,25);

    chain = new Chain(polygon.body,{x:200, y:50});
    

    ground = new Ground(600,300,300,20);




}

function draw() {
   background("black");

   Engine.update(engine);

   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();

   box6.display();
   box7.display();
   box8.display();
   box9.display();

   box10.display();
   box11.display();
   box12.display();

   box13.display();
   box14.display();

   box15.display();

   polygon.display();

   chain.display();

   ground.display();

   stroke("black");
   textSize(20);
   fill("white");
   text("Score: "+ score, 1100,40);
 
   

}

function mouseDragged(){
 
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
    chain.fly();
   
}

function keyPressed(){
    if(keyCode === 32){
        chain.attach(polygon.body);
    }
}

