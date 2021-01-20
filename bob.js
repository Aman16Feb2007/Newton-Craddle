class Bob{
    constructor(x,y) {
      var options = {
       restitution : 1,
       density : 1,
       friction : 0,
      }
      this.body = Bodies.circle(x,y,35,options);
      this.radius = 35;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      fill("yellow");
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };