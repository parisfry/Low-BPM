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

function distortedSpiral(turns = 5) {
  beginShape();
  for (let i = 0; i <= steps; i++) {
    let t = i / steps;
    let spiralRadius = r * t * turns; // Expanding radius
    let angle = TWO_PI * t * turns;

    let x = width / 2 + spiralRadius * cos(angle);
    let y = height / 2 + spiralRadius * sin(angle);

    x += map(noise(noiseScale * x, noiseScale * y, frameCount / 500), 0, 1, -noiseAmount, noiseAmount);
    y += map(noise(noiseScale * x, noiseScale * y, 1), 0, 1, -noiseAmount, noiseAmount);

    vertex(x, y);
  }
  endShape();
}

function draw() {
  background(0,10);
  distortedSpiral(50); // Change "3" for more or fewer spiral turns
}

