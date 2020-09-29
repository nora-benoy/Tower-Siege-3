const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15;
var box16;
var box17,box18,box19;
var box20,box21;
var box22;

var ground,ground2,ground3;

var slingshot;

var polygon,polygon_img;

var score = 0;

function preload(){
polygon_img = loadImage("polygon.png");
}

function setup(){

    var canvas = createCanvas(1000,500);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(100,450,2000,20);
    ground2 = new Ground(750,175,250,20);
    ground3 = new Ground(450,350,250,20);
    
    box1 = new Box(390,327,25,25);
    box2 = new Box(410,327,25,25);
    box3 = new Box(430,327,25,25);
    box4 = new Box(450,327,25,25);
    box5 = new Box(470,327,25,25);
    box6 = new Box(490,327,25,25);
    box7 = new Box(510,327,25,25);

    box8 = new Box(410,302,25,25);
    box9 = new Box(430,302,25,25);
    box10 = new Box(450,302,25,25);
    box11 = new Box(470,302,25,25);
    box12 = new Box(490,302,25,25);

    box13 = new Box(430,277,25,25);
    box14 = new Box(450,277,25,25);
    box15 = new Box(470,277,25,25);

    box16 = new Box(450,252,25,25);

    box17 = new Box(715,150,35,35);
    box18 = new Box(755,150,35,35);
    box19 = new Box(780,150,35,35);

    box20 = new Box(740,105,35,35);
    box21 = new Box(760,105,35,35);

    box22 = new Box(750,95,35,35);

    polygon = Bodies.rectangle(50,200,20,20);
    World.add(world,polygon);
    
    slingshot = new Slingshot(polygon,{x:180,y:290});
    
    Engine.run(engine);
}

function draw(){

    rectMode(CENTER);
    
    background(56,44,44); 

    push();

    textSize(20);
    fill(255);
    text("Press SPACE to get an extra chance!",20,50);
  
    text("Score: "+score,850,50);
    
    pop();
    
    Engine.update(engine);

    strokeWeight(2);

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

    box16.display();

    box17.display();
    box18.display();
    box19.display();

    box20.display();
    box21.display();

    box22.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    
    ground.display();
    ground2.display();
    ground3.display();
 
    fill("gold");
    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);

    slingshot.display();

    drawSprites();
   
}

function mouseDragged(){
Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
slingshot.Fly();
}

function keyPressed(){
if(keyCode === 32){
slingshot.attach(this.polygon);
Matter.Body.Position(this.polygon,{x:100,y:200});
}
}
