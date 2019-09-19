class Vector2 {
  
  static up()   {return new Vector2(0,1)}
  static down() {return new Vector2(0,-1)}
  static left() {return new Vector2(-1,0)}
  static right(){return new Vector2(1,0)}
  static zero() {return new Vector2(0,0)}
  static identity(){
    return new Vector2(1,1)
  }
  
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }
  
  get x(){return this._x}
  set x(value){ this._x = value}
  get y(){return this._y}
  set y(value){this._y = value}

  add(v2) {
    this._x += v2.x;
    this._y += v2.y;
    return this
  }

  sub(v2) {
    this._x -=  v2.x;
    this._y -=  v2.y;
    return this
  }


  mult(scaler) {
    this._x *= scaler;
    this._y *= scaler;
    return this;
  }
  
  //more like multiply function
  scale(scaler){
    return new Vector2(this._x*scaler,this._y*scaler)
  }
  
  equals(v2){
    return (v2.x === this._x && v2.y === this._y)
  }
  
  greaterThan(v2){
    return (this._x>v2.x &&this._y>v2.y)
  }
  
  //t must be between 0 and 1
  lerp(toLocation,t){
    this._x = (1-t)*this._x+t*toLocation.x
    this._y = (1-t)*this._y+t*toLocation.y
  }
  
  dot(v2){
    return this._x * v2.x + this._y * v2.y
  }
  
  magnitude(){
    let ans =  Math.sqrt(this._x*this._x+this._y+this._y)
    return ans
  }
  
  normalize(){
    let n = Vector2.normalized(this)
    this._x = n.x
    this._y = n.y
    return this
  }
  
  static normalized(v2){
    return new Vector2(v2.x/v2.magnitude(),v2.y/v2.magnitude())
  }
  
  static distance(v1,v2){
    let d = Vector2.direction(v1,v2)
    let ans = Math.sqrt(d.x*d.x+d.y*d.y)
    return ans
  }
  
  static direction(v1,v2){
    return new Vector2(
      v2.x-v1.x,
      v2.y-v1.y
      )
  }
  
  static toAngle(angle){
    let toRadians = (a)=>a*Math.PI/180
    angle = toRadians(angle)
    return new Vector2(Math.cos(angle),Math.sin(angle))
  }
  
  static angleOf(vector2){return Math.atan2(vector2.y,vector2.x)}
}
