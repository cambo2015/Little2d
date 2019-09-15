class Fireworks  extends IAnimate{
  
  constructor(ctx){
    super()
    this.ctx = ctx
    this.props = new MultiCircleProps(ctx)
    this.reverse = false
    this.speedSlider = document.getElementById("speed")
    this.reverseButton = document.getElementById("reverse")
    
  }
  
  start(){
    this.props.create()
    this.reverseButton.onclick = ()=>{
      this.reverse = !this.reverse
    }
  }
  
  update(){
    this.explode()
    if(this.reverse){
      this.changeMagnitude()
    }
    
    this.props.particles.forEach(x=>x.draw())
    //this.props.zoom(this.reverseSlider.value/10)
  }
  
  explode(){
    this.props.particles.forEach((x,i)=>{
      let dir = x.getDirection()
      //const slider = document.getElementById("speed")
      
      let speed = this.speedSlider.value
      //push particles forward
      x.position.x += (dir.x*x.speed*speed*.001)
      x.position.y += (dir.y *x.speed*speed*.001)
    })
  }
  
  changeMagnitude(){
    this.props.particles.forEach(x=>{
      let dir = x.getDirection()
      let reverse = .8//this.reverseSlider.value/10
        x.position.x *= (reverse)
        x.position.y *= (reverse)
      
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
  zoom(value){
    
    this.particles.forEach(x=>x.setRadius(value))
  }
}