let cor
let posicaoHorizontal
let posicaoVertical

function setup() {
createCanvas(900, 900);
background(cor = color(random(0, 255), random(0, 255), random(0, 255)));

cor = color(random(0, 255), random(0, 255), random(0, 255));
posicaoHorizontal = 200;
posicaoVertical = 200;
}

function draw() {
fill(cor);
circle(posicaoHorizontal, posicaoVertical, 140);
if(mouseX < posicaoHorizontal) {
posicaoHorizontal--;
}
if(mouseX > posicaoHorizontal) {
posicaoHorizontal++;
}
  if(mouseY < posicaoVertical) {
posicaoVertical--;
}
if(mouseY > posicaoVertical) {
posicaoVertical++;
}
  if(mouseIsPressed) {
cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
}
}