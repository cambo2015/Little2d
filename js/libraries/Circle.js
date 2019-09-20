class Circle {
  constructor(x, y, r, color, ctx) {
    this._ctx = ctx;
    this._position = new Vector2(x, y);
    this._radius = r;
    this._color = color;
    this._ctx = ctx;
    this._collided = false
    //this._physics = new CirclePhysics(this,200)
  }
  
  draw() {
    this._ctx.beginPath();
    this._ctx.arc(this._position.x, this._position.y, this._radius, 0, 2 * Math.PI);
    this._ctx.strokeStyle = this._color;
    this._ctx.stroke();
    this._ctx.fillStyle = this._color;
    this._ctx.fill();
  }
  
  get position(){return this._position}
  set position(vec2){
    this._position.x = vec2.x
    this._position.y = vec2.y
  }
  get radius(){return this._radius}
  set radius(value){this._radius = value}
  get color(){return this._color}
  set color(value){this._color = value}
  get collided(){return this._collided}
  set collided(value){this._collided = value}
  /* 
  collision detection | circle to circle
  radi1 + radi2 > distance between circles
  */
  /*collision(circle){
    let dist = Vector2.distance(this.position,circle.getPosition())
    let sum = this.radius + circle.getRadius()
    let ans =  sum > dist
    if (ans===true){
      this.position.sub(new Vector2(1,0))
    }
    return ans
  }*/
}
