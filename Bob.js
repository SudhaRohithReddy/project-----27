class Bob {
    constructor(){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.x = 200;
        this.y = 100
        this.r = 70;
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var bobpos = this.body.position;
        push();
        translate(bobpos.x,bobpos.y);
        //rectMode(CENTER);
        strokeWeight(2);
        fill("pink");
        ellipse(0,0,this.r,this.r);
        pop();
    }
}