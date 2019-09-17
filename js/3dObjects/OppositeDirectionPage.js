
class Fireworks  extends IAnimate{
  
  constructor(ctx){
    super()
    this.ctx = ctx
    this.props = new MultiCircleProps(ctx)
    this.reverse = false
    this.speedSlider = document.getElementById("speed")
    this.reverseButton = document.getElementById("reverse")
    this.zoomVal = .01
    this.zoomSlider = document.getElementById("zoom-slider")
    this.scale = .1
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
    //this.props.particles.forEach(x=>x.attract(this.props.particles))
   // this.props.zoom(this.scale+=.1)
    this.props.particles.forEach(x=>x.draw())
  }
  
  explode(){
    this.props.particles.forEach((particle,i)=>{
      let dir = particle.getDirection()
      //const slider = document.getElementById("speed")
      
      let slider = this.speedSlider.value
      //push particles forward
      //particle.position.x += (dir.x*particle.speed*slider*this.scale)
      //particle.position.y += (dir.y *particle.speed*slider*this.scale)
      const movement = new Vector2(
        dir.x,dir.y).mult(particle.speed*slider*this.scale)
      particle.position.add(movement)
    })
  }
  
  changeMagnitude(){
    let t=0
    this.props.particles.forEach(circle=>{
      let dir = circle.getDirection()
      let reverse = .9
     if (t<1){
       t+=.001
       circle.position.lerp(circle.originalPosition,t)
     }
        //circle.position.mult(reverse)
        circle.setRadius(5)
        
    })
    
  }
  
  changeBounds(){
    return Vector2.angle(Math.random()*360)
  }
}

class MultiCircleProps{
  constructor(ctx){
    this.radius = 5
    this.originalColor = "green"
    this.changeColor = "red"
    this.maxCircles = 100
    this.particles = []
    this.ctx= ctx
  }
  
  create(){
    for(let i=0;i<this.maxCircles;i++){
      this.particles.push(new FireworkParticle(random(100),random(100),this.radius,this.ctx)
      )
    }
  }
  
  zoom(value){
    this.particles.forEach(x=>x.setRadius(value))
  }
}