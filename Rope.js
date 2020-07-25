class Rope{
    constructor(bodyA,bodyB){
        
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 300,
            
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
        World.add(world,this.rope2);
        World.add(world,this.rope3);
        World.add(world,this.rope4);
        World.add(world,this.rope5);
    }

    display(){
        
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
}