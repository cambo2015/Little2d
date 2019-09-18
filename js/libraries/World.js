class World extends Circle{
  constructor(x,y,r,color,mass,ctx){
    super(x,y,r,color,ctx)
    this.rigidbody = new CirclePhysics(this,mass)
  }
}