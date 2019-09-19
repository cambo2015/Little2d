class World extends Circle{
  constructor(x,y,r,color,mass,ctx){
    super(x,y,r,color,ctx)
    this._rigidbody = new CirclePhysics(this,mass)
  }
  get rigidbody(){return this._rigidbody}
}