class FireworkParticle extends Circle{
  
  constructor(x,y,r,ctx){
    super(x,y,r,randomColor(),ctx)
    this.direction = Vector2.angle(Math.random()*360)
    this.speed = Math.random()*10
  }
  getDirection(){return this.direction}
  setDirection(value){ this.direction = value}
  
  attract(){
  }
}