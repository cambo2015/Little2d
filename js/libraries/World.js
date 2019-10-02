class World extends Circle{
  constructor(x,y,r,color,mass,ctx){
    super(x,y,r,color,ctx)
    this._rigidbody = new CirclePhysics(this,mass)
    this.text = new Text("sun",new Vector2(x,y+this._radius),10,"red",ctx)
  }
  
  get rigidbody(){return this._rigidbody}
  
  drawWorld(){
    draw()
    this.text.draw()
  }
  
  
}