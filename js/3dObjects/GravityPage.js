class GravityPage extends IAnimate{
  constructor(ctx){
    super()
    this.ctx = ctx
    this.sunMass = 20000
    this.planetMass = .1
    this.sun = new World(0,0,15,"yellow",this.sunMass,ctx)
    this.planets = [new World(200,-100,5,"blue",this.planetMass,ctx)]
    this.slider = document.getElementById("speed")
    this.speed = 10
    //this.circles = []
    //this.maxCircles = 10
    
  }
  
  start(){
    /*let x,y,r,color,mass
    for(let i=0;i<maxCircles;i++){
      mass = random(100)
      let circle = new Circle(x,y,r,color,mass,this.ctx)
      this.circles.push(circle)
    }*/
  }
  
  update(){
    const sun = this.sun
    this.planets.forEach((planet,i)=>{

    let direction,dist,m1,m2,force,forceVector
    
    direction = Vector2.direction(planet.position,sun.position)
    dist = direction.magnitude()
    if (dist>1 && !Number.isNaN(dist) && !planet.collided){
   // !Number.isNaN(dist)?console.log(dist):console.log(dist)
    m1 = sun.rigidbody.mass
    m2 = planet.rigidbody.mass
    force = (m1*m2)/dist*dist
    //console.log(force)
    forceVector = direction.normalize().scale(force)
    planet.position.add(forceVector.add(Vector2.left().scale(this.speed)))
    
    planet.draw()
    //planet.drawPath()
    if(dist<sun.radius){
      sun.radius += planet.radius
      planet.collided = true
    }
    }
    
    //planet.position.add(forceVec)
    
    sun.draw()
  
  })
  }
  
  
  
  onTouch(event,obj){
    const {touches} = event
    const x = touches[0].clientX - ctx.canvas.width/2
    const y = ctx.canvas.height/2- touches[0].clientY
    try{
      const planet = new World(x,y,5,"blue",.1,this.ctx)
     // console.log(this.planets)
      this.planets.push(planet)
      
    }
    catch(e){
      alert("error: "+e)
    }
  }
}