class Box{
    constructor(x,y,width,height){
        var opts_body = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,opts_body);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;

        stroke("black");
        textSize(20);
        fill("white");
        text("Score: "+ score, 1100,40);
      

        //Rotating the Box
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("purple");
        strokeWeight(3);
        stroke("cyan");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

        if(this.body.speed < 3){
            display()
           }
           else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             image(this.image, this.body.position.x, this.body.position.y, 50, 50);
             pop();
           }
        
           //Adding Points when a pig goes invisible.
             score()
             {
            if (this.Visiblity < 0 && this.Visiblity> -1000) {
                score++;scor//same as e =score+1;
            }
    }

    }
}