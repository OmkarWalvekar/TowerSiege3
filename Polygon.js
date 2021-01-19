class Polygon {
    constructor(x,y,radius) {
     var opts_body = {
        isStatic:false,
        restitution:0.3,
        friction:0.1,
        density:1.2

     }  
     
     this.image = loadImage("polygon.png");
     this.body = Bodies.circle(x,y,radius,opts_body);
     this.r = radius;
    World.add(world, this.body);

    }

    display() {

      fill("cyan");

        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r);

        imageMode(CENTER);
        image(this.image, 200, 200, 70, 70);

    }
}