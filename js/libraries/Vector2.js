class Vector2 {
  static up()   {return new Vector2(0,1)}
  static down() {return new Vector2(0,-1)}
  static left() {return new Vector2(-1,0)}
  static right(){return new Vector2(1,0)}
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  getX(){
    return this.x
    
  }
  setX(value){
    this.x = value
    
  }
  
  getY(){
    return this.y
    
  }
  
  setY(value){
    this.y = value
    
  }

  add(v2) {
    this.x = this.x + v2.getX();
    this.y = this.y + v2.getY();
  }

  sub(v2) {
    //console.log(v2.getX())
    this.x = this.x - v2.getX();
    this.y = this.y - v2.getY();
    
  }

  mult(scaler) {
    this.x * scaler;
    this.y * scaler;
    return this;
  }
  
  dot(v2){
    return this.x * v2.x + this.y * v2.y
  }
  
  magnitude(){
    let ans =  Math.sqrt(this.x*this.x+this.y+this.y)
    return ans
  }
  
  static distance(v1,v2){
    let x = v2.getX()-v1.getX()
    let y = v2.getY()-v1.getY()
    let ans = Math.sqrt(x*x+y*y)
    return ans
  }
}
