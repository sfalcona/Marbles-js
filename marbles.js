var marbles;  // Declare object


function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(15);
  textAlign(CENTER, CENTER);  
  marbles = new game;
  for (var i = 0; i < 6; i++){
  	marbles.addPlayer(new player("Seba"));
  }

  marbles.addObstacle(new obstacle(100,150,200,250));
  // marbles.addPlayer(new player("Seba", [100, 100], [6,0]));
  // marbles.addPlayer(new player("Mario", [800, 100], [-6,0]));
  frameRate(60);
}

function draw() {
  if(draw.count == undefined){
    draw.count = 1;
  }
  else{
    draw.count ++;
  }
  background(20, 20, 50);
  marbles.checkCollision();
  marbles.refresh();
  marbles.display();
}


// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   console.log('Probando')
//   // Create object
//   marbles = new game();
//   for (var i = 0; i < 5; i++){
//   	marbles.addPlayer(new player());
//   }
// }

// function draw() {
//   background(50, 89, 100);
//   marbles.update();
//   marbles.display();
// }


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}