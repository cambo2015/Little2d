class CirclePhysics{
  constructor(circle,mass){
    this.circle = circle
    this.mass = mass
    this.collided = false
  }
  
  addForce(vec2){
    circle.position.x += vec2.x
    circle.position.y += vec2.y
  }
  
  //causes error
  //get mass(){return this.mass}
  //set mass(value){this.mass = value}
  
  
  collision(circle){
    let dist = Vector2.distance(this.circle.position,circle.getPosition())
    let sum = this.circle.radius + circle.getRadius()
    let ans =  sum > dist
    if (ans===true){
      this.circle.position.sub(new Vector2(1,0))
    }
    return ans
  }
  
  static gravity(circle1,circle2){
    let m1 = circle1.physics.mass
    let m2 = circle2.physics.mass
    
  }
  
}