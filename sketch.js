let angle = 0;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);

}

  function draw() {
    for (var x = 25; x < 400; x += 25) {
      for (var y = 25; y < 400; y += 25) {
        stroke(0);

// scacchiera
        if (x % 2 == 0 && y%2 !=0) {
        fill(0);
        }
        else if (x % 2 != 0 && y%2 ==0) {
        fill(0);
        }
        else {
          fill (255);
        }
        rect(x, y, 25, 25);
      }
    }

  }
