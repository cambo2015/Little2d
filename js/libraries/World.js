class World extends Circle{
  constructor(x,y,r,color,mass,ctx){
    super(x,y,r,color,ctx)
    this._mass = mass
    this._acceleration = new Vector2(1,1,1)
  }
  get mass(){
    return this._mass
  }
  get acceleration(){
    return this._acceleration
  }
  accel(vector2){
    this._acceleration.add(vector2)
    this._position.add(this._acceleration)
  }
}