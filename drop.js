class Drop{
constructor(x,y){
    var options = {
   //     isStatic: true,
    }
    this.body=Bodies.circle(x,y,5,options);
    this.width=5;

    World.add(world, this.body);
}

display(){

var  pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      ellipse(pos.x, pos.y, this.width);
}

update(){
    Matter.Body.setPosition(this.body,{x:random(0,400),y:random(-20,0)});
}

}