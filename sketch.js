let steps = 360 * 3;
let r = 320;
let noiseScale = 0.03;
const noiseAmount = 500;

function setup() {
  createCanvas(400, 400);
  noFill();
  stroke(255, 50);
  background(0);
  r = 400 / 2.5;
}

function distortedCircle() {
  beginShape();
  for (let i = 0; i <= steps; i++) {
    x = width / 2 + r * cos((TWO_PI * i) / steps);
    y = height / 2 + r * sin((TWO_PI * i) / steps);
    x += map(
      noise(noiseScale * x, noiseScale * y, frameCount / 100),0,1,-noiseAmount,noiseAmount);
    y += map(
      noise(noiseScale * x, noiseScale * y, 1), 0,1, -noiseAmount,noiseAmount);
    vertex(x, y);
  }
  endShape();
}

function draw() {
  //background(0,1); more chill distortion and slow fading
 //background(100,1); //slow fading not just black to white
background (0,20);// intense moving with fading 

  stroke(255);
  distortedCircle();
}