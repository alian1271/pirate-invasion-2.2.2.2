class Boat {
    constructor(x, y, width, height, boatPos) {
        
        this.width = width;
        this.height = height;
        this.boatPosition = boatPos;
        this.boat_image = loadImage("assets/boat.png");
        this.body = Bodies.rectangle(x,y,width,height)
        World.add (world,this.body)
      } 
display(){
    var pos = this.body.position
    push()
    translate(pos.x,pos.y)
    imageMode(CENTER)
  image(this.boat_image,0,this.boatPosition,this.width,this.height)
 pop()
}

}



