class GravityPage extends IAnimate{
  constructor(ctx){
    super()
    this.ctx = ctx
    this.sunMass = -1000
    this.planetMass = 1
    this.sun = new World(0,0,10,"yellow",this.sunMass,ctx)
    this.planet = new World(100,10,5,"blue",this.planetMass,ctx)
  }
  
  start(){}
  
  update(){
    let planet = this.planet
    let sun = this.sun
    //planet.position.add(Vector2.left())
    //console.log(planet.position.x)
    let dist = Vector2.distance(sun.position,planet.position)
    !Number.isNaN(dist)?console.log(dist):""
    let m1 = sun.rigidbody.mass
    let m2 = planet.rigidbody.mass
    let force = (m1*m2)/dist
    
    //console.log(force)
    //let forceVec = Vector2.identity().scale(force)
    //console.log(forceVec.x)
    //planet.position.add(Vector2.left())
    planet.position.add(Vector2.identity().scale(force))
    //planet.rigidbody.accelerate(force)
    //planet.position.add(forceVec)
    planet.draw()
    sun.draw()
    //this.circles.forEach(x=>x.draw())
  }
}