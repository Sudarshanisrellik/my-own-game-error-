class hero{
    /*constructor(x,y){
        var options = {
            isStatic:false
        */}
    
    constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:10
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
        this.body = Bodies.rectangle(x,y,800,400,options)
    
        World.add(world,this.body)
        
        this.image = loadImage("BOI.png")

  show();{
      var pos = this.body.position;

      //pos.x = mouseX;
     // pos.y = mouseY;

      //console.log(pos);

      image(this.image,pos.x,pos.y,120,120);
  }}
