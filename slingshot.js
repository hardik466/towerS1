class Slingshot{

    constructor(){
        var Slingshot_options={
            isStatic : true
          }
        
          this.Slingshot = Bodies.rectangle(450,390,900,20,Slingshot_options)
          World.add(world,this.Slingshot);
    }
    display(){
        
        Stroke(3);
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.Slingshot.position.x,this.Slingshot.position.y,900,20);
    }
}