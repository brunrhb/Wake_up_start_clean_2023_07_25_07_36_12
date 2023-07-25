
let mot = 'mot'
let x ;
let y = -10

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(10);
}

function draw() {
  background(220);
  MakeFall ();
}

function MakeFall() {
x = random(width);
y -= 1
text ( mot, x, y );
}



