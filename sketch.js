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

function distortedGrid(cols = 10, rows = 10) {
  let cellWidth = width / cols;
  let cellHeight = height / rows;

  for (let i = 0; i <= cols; i++) {
    for (let j = 0; j <= rows; j++) {
      let x = i * cellWidth;
      let y = j * cellHeight;

      x += map(noise(noiseScale * x, noiseScale * y, frameCount / 1000), 0, 1, -noiseAmount, noiseAmount);
      y += map(noise(noiseScale * x, noiseScale * y, 1), 0, 1, -noiseAmount, noiseAmount);

      fill('yellow');
      ellipse(x, y, 20); // Draw points as small circles
    }
  }
}

function draw() {
  background('lightBlue');
  distortedGrid(1, 20); // Change 15x15 to adjust grid density
}