class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,30,options)
        this.image=loadImage("paper(1).png")
        this.radius=30;
        World.add(world,this.body)
    }
    fly(){
        this.body.isStatic=false;
        
    } 
    display(){
        
        push()
        translate(this.body.position.x,this.body.position.y)
        
        imageMode(CENTER)
        image(this.image,200,200,this.radius/2,this.radius/2)
        pop()
    }
}