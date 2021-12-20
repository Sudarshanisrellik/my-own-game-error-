class mob{
    constructor(x,y){
        var options = {
            isStatic:true
        }
    this.body = Bodies.rectangle(x,y,70,70,options)
    
    World.add(world,this.body)
    
    this.image = loadImage("mob.png")

}
  show(){
    var pos = this.body.position;

      image(this.image,pos.x,pos.y,70,70);
  }
}