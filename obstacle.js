function obstacle(x1,x2,y1,y2) {
  this.x1 = x1;
  this.x2 = x2;
  this.y1 = y1;
  this.y2 = y2;
  this.norm = [];


  this.getNorm = function(){
    var me = this
    var difx = (this.x2 - this.x1);
    var dify = (this.y2 - this.y1);
    var mod = Math.sqrt(difx * difx + dify * dify);
    if (mod != 0){
      me.norm = [-dify/mod, difx/mod]
    }
    else{
      me.norm = [0,0]
    }
  };


  this.display = function() {
    stroke(255);
    strokeWeight(2);
    line(this.x1, this.x2, this.y1, this.y2);
  };
}

