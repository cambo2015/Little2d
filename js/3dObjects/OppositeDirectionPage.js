class Explosion  extends IAnimate{
  
  constructor(ctx){
    super()
    this.ctx = ctx
    this.props = new MultiCircleProps(ctx)
  }
  
  start(){
    this.props.create()
  }
  
  update(){
    
    this.explode()
    this.props.circles.forEach(x=>x.draw())
  }
  
  explode(){
    this.props.circles.forEach((x,i)=>{
      const speed = randomRange(5,100)
      let dir = x.getDirection()
      x.position.x += dir.x*speed
      x.position.y += dir.y*speed
    })
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
    this.maxCircles = 100
    this.circles = []
    this.ctx= ctx
  }
  
  create(){
    for(let i=0;i<this.maxCircles;i++){
      this.circles.push(new World(window.innerWidth/2,window.innerHeight/2,this.radius,this.originalColor,this.ctx)
      )
    }
  }
}