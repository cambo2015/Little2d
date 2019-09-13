class MoveCircle extends IAnimate {
  constructor(ctx) {
    super();
    this.radius = 100
    this.reverse = false
    this.crclOrginalColor = "green"
    this.crclCollideColor= "red"
    this.circles = [
      new Circle(100, 100,this.radius, this.crclOrginalColor, ctx),
      new Circle(100,100,50,this.crclOrginalColor,ctx)
      ]
      
  }
  
  moveCircle(){
    if(!this.reverse){
      this.circles[0].position.add(Vector2.right)
    }
    else if(this.reverse){
      this.circles[0].position.add(Vector2.left)
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
    try{
    this.circles[0].setColor(this.circles[0].collision(this.circles[1])?this.crclCollideColor:this.crclOrginalColor)
    //second circle
    this.circles[1].color = 
    (this.circle[1].collision(
      this.circles[0]))? this.crclCollideColor:this.crclOrginalColor
    }catch(e){
      console.log(e)
    }
  }
  
  start() {
    this.circles.forEach(x=>x.draw())
  }

  update() {
    this.checkReverse()
    this.moveCircle()
   // this.collisionCheck()
    this.circles.forEach(x=>x.draw())
  }
}
