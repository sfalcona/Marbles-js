function player(name, p, s) {
  this.p = [random(windowWidth), 30];
  this.s = [random(-10,10), random(-5,5)];
  this.a = [0, 0.8];
  this.diameter = 10;
  this.fric = 0.9;
  this.color = [random(255) , random(255), random(255)];
  this.name = name;

  this.update = function() {
    this.p[0]+= this.s[0];
    this.p[1]+= this.s[1];
    this.s[0] += this.a[0];
    this.s[1] += this.a[1];

    if (this.p[0] > windowWidth){
      this.p[0]= windowWidth;
      this.s[0] *= -this.fric;
      this.s[1] *= this.fric;
    }
    if (this.p[0]< 0){
      this.p[0]= 0;
      this.s[0] *= -this.fric;
      this.s[1] *= this.fric;
    }
    if (this.p[1] > windowHeight - this.diameter/2){
      this.p[1] = windowHeight - this.diameter/2;
      this.s[1] *= -this.fric;
      this.s[0] *= this.fric;
      this.fric *= 0.9;
    }
  };

  this.display = function() {

    strokeWeight(1);
    textAlign(CENTER);
    fill(200);
    text(this.name, this.p[0],this.p[1] - 2*this.diameter)

    fill(this.color[0], this.color[1], this.color[2], 197)
    stroke(this.color[0]/2, this.color[1]/2, this.color[2]/2)
    ellipse(this.p[0], this.p[1], this.diameter, this.diameter);
  };
}

