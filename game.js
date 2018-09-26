class game {

  constructor(){
    this.players = [];
    this.obstacles = [];
  }
 
  addPlayer(pl){
    this.players.push(pl);
  }

  addObstacle(ob){
    this.obstacles.push(ob);
  }

  refresh(){
    var me = this;
    for (var i = 0; i < this.players.length; i++){
      me.players[i].update();
    }
  }

  radians(deg){
    return deg * 0.0174533;
  }

  degrees(rad){
    return rad * 57.2958;
  }

  solveCollision(p1, p2){
    var me = this
    var p1Speed = Math.sqrt((p1.s[0]*p1.s[0]) + (p1.s[1]*p1.s[1]))
    var XDiff = -(p1.p[0] - p2.p[0])
    var YDiff = -(p1.p[1] - p2.p[1])
    var Angle = 0
    var XSpeed = 0
    var YSpeed = 0

    if (XDiff > 0) {
      if (YDiff >= 0){
        Angle = me.degrees(Math.atan(YDiff/XDiff))
        XSpeed = -p1Speed*Math.cos(me.radians(Angle))
        YSpeed = -p1Speed*Math.sin(me.radians(Angle))
      }
      else if (YDiff < 0){
        Angle = me.degrees(Math.atan(YDiff/XDiff))
        XSpeed = -p1Speed*Math.cos(me.radians(Angle))
        YSpeed = -p1Speed*Math.sin(me.radians(Angle))
      }
    }
    else if (XDiff < 0){
      if (YDiff >= 0){
        Angle = 180 + me.degrees(Math.atan(YDiff/XDiff))
        XSpeed = -p1Speed*Math.cos(me.radians(Angle))
        YSpeed = -p1Speed*Math.sin(me.radians(Angle))
      }
      else if (YDiff < 0){
        Angle = -180 + me.degrees(Math.atan(YDiff/XDiff))
        XSpeed = -p1Speed*Math.cos(me.radians(Angle))
        YSpeed = -p1Speed*Math.sin(me.radians(Angle))
      }
    }
    else if (XDiff == 0){
      if (YDiff >= 0){
        Angle = -90
      }
      else{
        Angle = 90
      }
      XSpeed = p1Speed*Math.cos(me.radians(Angle))
      YSpeed = p1Speed*Math.sin(me.radians(Angle))
    }
    else if (YDiff == 0){
      if (XDiff < 0){
        Angle = 0
      }
      else{
        Angle = 180
      }
      XSpeed = p1Speed*Math.cos(me.radians(Angle))
      YSpeed = p1Speed*Math.sin(me.radians(Angle))
    }
    p1.s[0] = XSpeed 
    p1.s[1] = YSpeed 
  }


  checkCollision(){
    var me = this;
    for (var i = 0; i < this.players.length; i++){
      for (var j = i; j < me.players.length; j++){
        if (i != j){
          var x = (me.players[i].p[0] - me.players[j].p[0])
          var y = (me.players[i].p[1] - me.players[j].p[1])
          // console.log(x*x + y*y)
          if (Math.sqrt((x*x + y*y)) <= (me.players[i].diameter)){
            me.solveCollision(me.players[i], me.players[j])
            me.solveCollision(me.players[j], me.players[i])
          }
        }
      }
    }
    for (var i = 0; i < this.players.length; i++){
      for (var j = 0; j < this.obstacles.length; j++){
        
      }
    }
  }


  display(){
    var me = this;
    for (var i = 0; i < this.players.length; i++){
      me.players[i].display();
    }
    for (var i = 0; i < this.obstacles.length; i++){
      me.obstacles[i].display();
    }
    
  }

}

