var hr,mn,sc;
var scAngle,mnAngle,hrAngle;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);//
  angleMode(DEGREES);
}

function draw() {
  background(0,0,0); 
  translate(200,200);
  rotate(-90);
  //caulate time 
  hr = hour();
  mn = minute();
  sc = second();
  scAngle = map(sc,0,60,0,360);
  mnAngle = map (mn,0,60,0,360);
  hrAngle = map (hr%12,0,60,0,360);
  arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(50, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);

  //draw seconds hand
  push();
  arc(50, 50, 80, 80, 0);
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //draw minutes hand
  push();
  arc(50, 50, 80, 80, 0);
  arc(50, 50, 80, 80, 0);
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  //draw hour hand
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  
  drawSprites();
}