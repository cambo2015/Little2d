class MoveCircle extends IAnimate {
  constructor(ctx) {
    super();
    this.radius = 50
    this.reverse = false
    this.crclOrginalColor = "green"
    this.crclCollideColor= "red"
    this.circles = [
      new Circle(100, 100,this.radius, this.crclOrginalColor, ctx),
      new Circle(250,100,50,this.crclOrginalColor,ctx)//,
      //new Circle(300,100,this.radius,this.crclOriginalColor,ctx)
      ]
  }
  
  moveCircle(){
    if(!this.reverse){
      this.circles[0].position.add(Vector2.right())
    }
    else if(this.reverse){
      this.circles[0].position.add(Vector2.left())
    }
  }
  
  checkReverse(){
    if (this.circles[0].position.x >= window.innerWidth - this.radius-20){
      this.reverse=true
    }
    
    else if(this.circles[0].position.x - this.radius <= 0) {
      this.reverse=false
    }
  }
  
  collisionCheck(){
    //first circle
    for(let i=0;i<this.circles.length-1;i++){
    let circle1 = this.circles[i]
    let circle2 = this.circles[i+1]
    let collided = circle1.collision(circle2)
    let color = (collided)?this.crclCollideColor:this.crclOriginalColor;
    circle1.setColor(color)
    
    }
  }
  
  start() {
    this.circles.forEach(x=>x.draw())
  }

  update() {
    this.checkReverse()
    this.collisionCheck()
    this.moveCircle()
    this.circles.forEach(x=>x.draw())
  }
}
