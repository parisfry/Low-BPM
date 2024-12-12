let steps = 360 * 1;
let r = 320;
let noiseScale = 0.003;
const noiseAmount = 50;

function setup() {
  createCanvas(400, 400);
  noFill();
  stroke(255, 50);
  background(0);
  r = 400 / 2.5;

}

function distortedWave() {
  beginShape();
  for (let x = 0; x <= width; x += 10) {
    let y = height / 2 + 50 * sin(TWO_PI * x / width * 0); // Base sine wave
    y += map(noise(noiseScale * x, frameCount / 500), 0, 1, -noiseAmount, noiseAmount); // Add distortion
    vertex(x, y);
  }
  endShape();
}

function draw() {
  background(0);
  fill(220);
  distortedWave();
}

