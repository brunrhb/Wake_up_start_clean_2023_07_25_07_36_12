
let LISTE = ['wake', 'up', '!', '!'];
let motsEnCours = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  
}

function draw() {
  background(220);
  triggers ()
  fall ()
}


function triggers() {
  let x = random(width);
  let y = random(-100, -50);
  let motActuel = random(LISTE);
  let Speed = random(1, 10);
  let size = random(10, 30);
  motsEnCours.push({ motActuel, x, y, Speed, size });
}
function fall () {
 for (let i = 0; i < motsEnCours.length; i++) {
    let mot = motsEnCours[i];
    mot.y += mot.Speed;
    textSize(mot.size);
    text(mot.motActuel, mot.x, mot.y);
   

     if (mot.y > height) {
      motsEnCours.splice(i, 1);
      i--;
    }}}


