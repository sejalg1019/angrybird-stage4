class Chain{
    constructor(bodyA, bodyB){ //constructor takes two bodies that the chain should connect
        var options = {
            bodyA: bodyA, //assign bodyA to bodyA
            bodyB: bodyB, //assign bodyB to bodyB
            length: 10, //assign the length of the chain
            stiffness: 0.04 //assign the stiffness of the chain
        }
        this.chain = Constraint.create(options); //create chain using Constraint
        World.add(world, this.chain); //adding the chain into the world
    }
    display(){
        var pointA = this.chain.bodyA.position; //take the position of bodyA as pointA
        var pointB = this.chain.bodyB.position; //take the position of bodyB as pointB
        line(pointA.x,pointA.y,pointB.x,pointB.y); // draw a line between pointA and pointB

    }
}