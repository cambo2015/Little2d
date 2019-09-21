class CirclePhysics{
  static GRAVITY(){return 9.8}
  static G (){return 6.67}
  constructor(circle,mass){
    this._circle = circle
    this._mass = mass
    this._collided = false
    this._acceleration = Vector2.zero()
  }
  
  addForce(vec2){
    circle.position.x += vec2.x
    circle.position.y += vec2.y
  }
  
  get mass(){return this._mass}
  get collided(){return this._collided}
  get acceleration(){return this._acceleration}
  
  accelerate(vector2){
    this._acceleration.add(vector2)
    this._circle.position.add(this._acceleration)
  }
  
  collision(circle){
    let dist = Vector2.distance(this.circle.position,circle.getPosition())
    let sum = this.circle.radius + circle.getRadius()
    let ans =  sum > dist
    if (ans===true){
      this.circle.position.sub(new Vector2(1,0))
    }
    return ans
  }
  
  //returns the Force as a float
  static gravityFormula(circle1,circle2){
    let m1 = circle1.physics.mass
    let m2 = circle2.physics.mass
    let dist = Vector2.distance(circle1.position,circle2.position)
    return (m1*m2)/(dist*dist)
  }
  
  
}