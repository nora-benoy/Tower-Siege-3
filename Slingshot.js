class Slingshot{

    constructor(bodyA, pointB){

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.03,
            length:5
        }

        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
        
    }

    attach(body){
    this.sling.bodyA = body;
    }

    Fly(){
    this.sling.bodyA = null;
    } 
    
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3);
        stroke(0);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }      
    }
    
}