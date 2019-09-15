class Fireworks  extends IAnimate{
  
  constructor(ctx){
    super()
    this.ctx = ctx
    this.props = new MultiCircleProps(ctx)
    this.reverse = false
  }
  
  start(){
    this.props.create()
  }
  
  update(){
    
    this.explode()
    this.props.particles.forEach(x=>x.draw())
  }
  
  explode(){
    this.props.particles.forEach((x,i)=>{
      let dir = x.getDirection()
      const slider = document.getElementById("speed")
      const reverseSlider = document.getElementById("reverse")
      let speed = slider.value
      let reverse = reverseSlider.value/10
      //push x and y forward
      x.position.x += (dir.x*x.speed*speed)
      x.position.y += (dir.y *x.speed*speed)
      //change the magnitude/length of vector
      x.position.x /= (reverse*-1*dir.x)
      x.position.y /= (reverse *-1*dir.x)
    })
  }
  
  changeBounds(){
    return Vector2.angle(Math.random()*360)
  }
}

class MultiCircleProps{
  constructor(ctx){
    this.radius = 3
    this.originalColor = "green"
    this.changeColor = "red"
    this.maxCircles = 100
    this.particles = []
    this.ctx= ctx
  }
  
  create(){
    for(let i=0;i<this.maxCircles;i++){
      this.particles.push(new FireworkParticle(0,0,this.radius,this.ctx)
      )
    }
  }
}