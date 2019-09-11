class Vector2 {
  static up = new Vector2(0,1);
  static down = new Vector2(0,-1);
  static left = new Vector2(-1,0);
  static right = new Vector2(1,0);
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v2) {
    this.x += v2.x;
    this.y += v2.y;
    return this;
  }

  sub(v2) {
    this.x -= v2.x;
    this.y -= v2.y;
    return this;
  }

  mult(scaler) {
    this.x * scaler;
    this.y * scaler;
    return this;
  }
  
  dot(v2){
    return this.x * v2.x + this.y * v2.y
  }
  
  distance(v2){
    return Math.sqrt(this.x*this.x+this.y+this.y)
  }
}
