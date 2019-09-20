class GravityPage extends IAnimate{
  constructor(ctx){
    super()
    this.ctx = ctx
    this.sunMass = 100
    this.planetMass = 1
    this.sun = new World(0,0,10,"yellow",this.sunMass,ctx)
    this.planet = new World(100,100,5,"blue",this.planetMass,ctx)
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
    if (dist>1 && !Number.isNaN(dist)){
    !Number.isNaN(dist)?console.log(dist):console.log(dist)
    m1 = sun.rigidbody.mass
    m2 = planet.rigidbody.mass
    force = (m1*m2)/dist
    //console.log("force:"+force)
    forceVector = direction.normalize().scale(force)
    
    //console.log(CirclePhysics.G())
    //let forceVec = Vector2.identity().scale(force)
    //console.log(forceVec.x)
    //planet.position.add(.left())
    planet.position.add(forceVector.add(Vector2.left().scale(1.2)))
      
    }
    //console.log(planet.position.x)
    //planet.rigidbody.accelerate(force)
    //planet.position.add(forceVec)
    planet.draw()
    sun.draw()
    //this.circles.forEach(x=>x.draw())
  }
}