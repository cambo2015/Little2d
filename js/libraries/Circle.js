class Circle {
  constructor(x, y, r, color, ctx) {
    this.ctx = ctx;
    this.position = new Vector2(x, y);
    this.radius = r;
    this.color = color;
    this.ctx = ctx;
    this.collided = false
    
  }
  
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    this.ctx.strokeStyle = this.color;
    this.ctx.stroke();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
  
  getPosition(){return this.position}
  setPosition(x,y){
    this.position.x = x
    this.position.y = y
  }
  getRadius(){return this.radius}
  getColor(){return this.color}
  setColor(value){this.color = value}
  
  /* 
  collision detection | circle to circle
  radi1 + radi2 > distance between circles
  */
  collision(circle){
    let dist = Vector2.distance(this.position,circle.getPosition())
    let sum = this.radius + circle.getRadius()
    let ans =  sum > dist
    if (ans===true){
      this.position.sub(new Vector2(1,0))
    }
    return ans
  }
}
