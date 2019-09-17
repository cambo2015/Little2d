class Vector2 {
  static up()   {return new Vector2(0,1)}
  static down() {return new Vector2(0,-1)}
  static left() {return new Vector2(-1,0)}
  static right(){return new Vector2(1,0)}
  
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }
  
  get x(){
    return this._x
    
  }
  set x(value){
    this._x = value
  }
  
  get y(){
    return this._y
    
  }
  
  set y(value){
    this._y = value
    
  }

  
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
  
  scale(scaler){
    return new Vector2(this._x*scaler,this._y*scaler)
  }
  
  dot(v2){
    return this._x * v2.x + this._y * v2.y
  }
  
  magnitude(){
    let ans =  Math.sqrt(this._x*this._x+this._y+this._y)
    return ans
  }
  
  static normalize(v2){
    return new Vector2(v2.x/v2.magnitude(),v2.y/v2.magnitude())
  }
  
  static distance(v1,v2){
    let x = v2.x()-v1.x()
    let y = v2.y()-v1.y()
    let ans = Math.sqrt(x*x+y*y)
    return ans
  }
  
  static angle(angle){
    let toRadians = (a)=>a*Math.PI/180
    angle = toRadians(angle)
    return new Vector2(Math.cos(angle),Math.sin(angle))
  }
}
