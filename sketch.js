const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var divisionHeight=300;
var plinkos=[];
  var particles=[];
  var divisions=[]; 

function setup() {
  engine = Engine.create();
  world = engine.world;
 Engine.run(engine);

  createCanvas(480,800);

  ground=new Ground(240,800,480,20);

  for(var k=0; k<=innerWidth; k=k +80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

for (var j = 20; j<= width - 20; j = j+50){
  plinkos.push(new Plinko(j,55));
  }

for (var j = 50; j <= width-20; j=j+51.1){
  plinkos.push(new Plinko(j,105));
  }

for (var j = 20; j<= width -20; j = j+50){
   plinkos.push(new Plinko(j,155));
  }

for (var j = 50; j <= width-20; j=j+51.1){
   plinkos.push(new Plinko(j,205));
 }

for (var j = 20; j<= width -20; j = j+50){
  plinkos.push(new Plinko(j,255));
 }

}


function draw() {
  background(0);  
  
  ground.display();

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  if(frameCount % 30 === 0){
    particles.push(new Particle(random(50,430), 10,10));

  }



  for( var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  drawSprites();

}