const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var block1, block2, block3, block4;
var polygon, slingShot, slingshot;

var Body

function preload(){
    polygon_image = loadImage("polygon.png")
}


function setup(){
    engine = Engine.create()
    world = engine.world
    
var canvas = createCanvas(1200,400);

ground = new Ground(600,height,1200,20);
stand = new Stand(375,265,200,20);

block1 = new Box(330,235,30,40)
block2 = new Box(360,235,30,40)
block3 = new Box(390,235,30,40)
block4 = new Box(420,235,30,40)

polygon = Bodies.circle(50,200,20)
World.add(world,polygon)

slingshot = new SlingShot(this.polygon,{x:100, y:200});



}

function draw(){
    background(56,44,44)
    Engine.update(engine)

    ground.display()
    stand.display()
    
    block1.display()
    block2.display()
    block3.display()
    block4.display()

    imageMode(CENTER)
    image(polygon_image, polygon.position.x,polygon.position.y,40,40)
    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode===32){
        slingshot.attach(this.polygon)
    }
}


