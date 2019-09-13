class OppositeDirectionPage  extends IAnimate{
  
  constructor(ctx){
    super()
    this.ctx = ctx
    this.props = new MultiCircleProps(ctx)
    
  }
  
  start(){
    
  }
  
  update(){
    let angle = Vector2.angle(20)
    this.props.circles[0].position.add(angle)
    this.props.circles.forEach(x=>x.draw())
  }
  
  changeBounds(){
    return Vector2.angle(Math.random()*360)
  }
}

class MultiCircleProps{
  constructor(ctx){
    this.radius = 1
    this.originalColor = "green"
    this.changeColor = "red"
    this.circles = [
      new Circle(100,100,this.radius,this.originalColor,ctx)
    ]
  }
}