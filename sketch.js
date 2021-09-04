var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,40);
  
}

function draw() {
background('yellow');

if(keyIsDown(DOWN_ARROW)){
  background('red');
}

}




