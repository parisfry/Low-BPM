let steps = 360 * 3;
let r = 324;
let noiseScale = 0.003;
const noiseAmount = 50;

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
      noise(noiseScale * x, noiseScale * y, frameCount / 500),0,1,-noiseAmount,noiseAmount);
    y += map(
      noise(noiseScale * x, noiseScale * y, 1), 0,1, -noiseAmount,noiseAmount);
    vertex(x, y);
  }
  endShape();
}

function draw() {
  background(0);
  stroke(255);
  distortedCircle();
}