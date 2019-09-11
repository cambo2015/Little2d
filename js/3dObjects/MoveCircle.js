class MoveCircle extends IAnimate {
  constructor(ctx) {
    super();
    this.radius = 100
    this.reverse = false
    this.circles = [
      new Circle(100, 100,this.radius, "green", ctx),
      new Circle(100,300,50,"orange",ctx)
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

  start() {
    this.circles.forEach(x=>x.draw())
  }

  update() {
    this.checkReverse()
    this.moveCircle()
    this.circles.forEach(x=>x.draw())
  }
}
