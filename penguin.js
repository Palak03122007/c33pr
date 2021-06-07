class penguin{
    constructor(x, y, r) {
      var options = {
          isStatic:false,
          'restitution': 0.1,
          'friction': 0.4,
          'density': 0.1
      }

      this.x=x;
      this.y=y;
      this.r=r;
      this.image=loadImage("penguin.png");
      this.body = Bodies.circle(x, y, r, options);
      World.add(world, this.body);
    }

        jump(body,velocity){
            body.positionPrev.x = body.position.x - velocity.x;
            body.positionPrev.y = body.position.y - velocity.y;
            body.velocity.x = velocity.x;
            body.velocity.y = velocity.y;
            body.speed = Vector.magnitude(body.velocity);
        }

    display() {

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle)
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image, 0,0,this.r, this.r)
        pop();
    }
  };