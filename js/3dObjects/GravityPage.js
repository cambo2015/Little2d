class GravityPage extends IAnimate{
  constructor(ctx){
    super()
    this.circles = []
    this.ctx = ctx
    this.sunMass = 100
    this.planetMass = 10
  }
  
  start(){
    const sun = new World(0,0,20,"yellow",this.sunMass,ctx)
    const planet = new World(100,0,10,"blue",this.planetMass,ctx)
    this.circles.push(sun)
    this.circles.push(planet)
    //circle.push(new World())
  }
  update(){
    this.circles.forEach(planet=>{
        planet.accel(Vector2.left().scale(.1))
        
    })
    this.circles.forEach(x=>x.draw())
  }
}