class GravityPage extends IAnimate{
  constructor(ctx){
    super()
    this.ctx = ctx
    this.sunMass = 300
    this.planetMass = 1
    this.sun = new World(0,0,10,"yellow",this.sunMass,ctx)
    this.planet = new World(200,-50,5,"blue",this.planetMass,ctx)
    this.slider = document.getElementById("speed")
  }
  
  start(){}
  
  update(){
    const planet = this.planet
    const sun = this.sun
    let direction,dist,m1,m2,force,forceVector
    //console.log(planet.position.x)
    direction = Vector2.direction(planet.position,sun.position)
    //let dist = Vector2.distance(planet.position,sun.position)
    dist = direction.magnitude()
    if (dist>1 && !Number.isNaN(dist) && planet.collided === false){
   // !Number.isNaN(dist)?console.log(dist):console.log(dist)
    m1 = sun.rigidbody.mass
    m2 = planet.rigidbody.mass
    force = (m1*m2)/dist
  
    forceVector = direction.normalize().scale(force)
    planet.position.add(forceVector.add(Vector2.left().mult(20)))
    planet.draw()
    if(dist<sun.radius){
      sun.radius += planet.radius
      planet.collided = true
    }
    }
    //console.log(planet.position.x)
    //planet.rigidbody.accelerate(force)
    //planet.position.add(forceVec)
    sun.draw()
    //this.circles.forEach(x=>x.draw())
  }
}