class World extends Circle{
  
  constructor(x,y,r,color,ctx){
    super(x,y,r,color,ctx)
    this.direction = Vector2.angle(Math.random()*360)
  }
  getDirection(){return this.direction}
  setDirection(value){ this.direction = value}
  
  attract(){
  }
}