const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1
var bird
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)
    box1 = new Box(600,370,60,60);
    box2 = new Box(800,370,60,60);
    pig1= new Pig(700,370)
    log1= new Log(700,330,270,PI/2);
    
    box3 = new Box(600,300,60,60);
    box4 = new Box(800,300,60,60);
    pig2= new Pig(700,300)
    log2= new Log(700,260,270,PI/2);

    box5 = new Box(700,230,60,60);
    log3= new Log(650,200,120,PI/7);
    log4= new Log(750,200,120,-PI/7);

    bird= new Bird(200,150)
}
function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}