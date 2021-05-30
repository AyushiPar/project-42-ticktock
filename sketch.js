var h,m,s

function setup() {
  createCanvas(900,810);
  angleMode(DEGREES);
}

function draw() {
  background (224,224,216);  

  translate(450,405);
  rotate(-90);

  h = hour();
  m = minute();
  s = second();

  sAngle = map(s,0,60,0,360);
  mAngle = map(m,0,60,0,360);
  hAngle = map(h%12,0,12,0,360);

  push();
  rotate(sAngle);
  stroke(217,168,143);
  strokeWeight(7);
  line(0,0,200,0);
  pop();

  push();
  rotate(mAngle);
  stroke(240,211,165);
  strokeWeight(10);
  line(0,0,125,0);
  pop();

  push();
  rotate(hAngle);
  stroke(155,175,142);
  strokeWeight(13);
  line(0,0,50,0);
  pop();

  strokeWeight(10);
  noFill();

  stroke(217,168,143);
  arc(0,0,515,515,0,sAngle);

  stroke(240,211,165);
  arc(0,0,495,495,0,mAngle);

  stroke(155,175,142);
  arc(0,0,475,475,0,hAngle);



  
  drawSprites();
}