class FireworkParticle extends Circle{
  
  constructor(x,y,r,ctx){
    super(x,y,r,randomColor2(colorScheme.first),ctx)
    this.direction = Vector2.angle(Math.random()*360)
    this.speed = Math.random()*10
    this.mass = Math.pow(6.2,10*23)
  }
  getDirection(){return this.direction}
  setDirection(value){ this.direction = value}
  
  setRadius(value){
    this.radius = value
  }
  attract(worlds){
    worlds.forEach(x=>{
      //console.log("here")
      if(x!==this){
        let g = (x.mass *this.mass)/Math.pow(Vector2.distance(x.position,this.position),2)
        const gv =new Vector2(0,g)
        this.position.x = gv.x
        this.position.y = gv.y
      }
    })
  }
}