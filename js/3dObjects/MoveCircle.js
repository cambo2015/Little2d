class MoveCircle extends IAnimate {
  constructor(ctx) {
    super();
    this.radius = 100
    this.reverse = false
    this.circle = new Circle(100, 100,this.radius, "green", ctx);
  }
  
  
  moveCircle(){
    if(!this.reverse){
      this.circle.position.x += 1
    }
    else if(this.reverse){
      this.circle.position.x -= 1
    }
  }
  checkReverse(){
    if (this.circle.position.x >= window.innerWidth -this.radius-20){
      this.reverse=true
    }
    else if(this.circle.position.x-this.radius <=0) {
      this.reverse=false
    }
  }

  start() {
    this.circle.draw()
  }

  update() {
    this.checkReverse()
    this.moveCircle()
    this.circle.draw();
  }
  
}
