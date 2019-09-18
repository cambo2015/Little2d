class World extends Circle{
  constructor(x,y,r,color,mass,ctx){
    super(x,y,r,color,ctx)
    this._mass = mass
  }
  get mass(){
    return this._mass
  }
}