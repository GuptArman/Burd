class Slingshot{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
        stiffness:0.04,
        length:10
        
        }
        this.sling=Constraint.create(option)
        this.pointB=pointB
        World.add(world,this.sling)
    }
    display(){
        var pointA=this.sling.bodyA.position
        var pointB=this.pointB
        if(this.sling.bodyA){
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
    fly(){
        this.sling.bodyA=null
    }
}