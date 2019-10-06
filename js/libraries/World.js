class World extends Circle{
  constructor(x,y,r,color,mass,ctx){
    super(x,y,r,color,ctx)
    this._rigidbody = new CirclePhysics(this,mass)
    this.text = new Text("sun",new Vector2(x,y+this._radius),10,"red",ctx)
    this.startPosition = [x,y]
    this.positions = [this.startPosition]
  }
  
  get rigidbody(){return this._rigidbody}
  
  drawWorld(){
    draw()
    this.text.draw()
  }
  
  addPosition(){
    this.positions.push(new Vector2(this._position.x,this._position.y))
  }
  
  //to draw a curved path the trick is to add every single frame's position to and array and then draw a line between the previous position in the array to the current position. Then redraw the entire thing every frame! nifty trick
  drawPath(){
    let x = this._position.x
    let y = this._position.y
    this.positions.push([x,y])
    this._ctx.beginPath();
    this.positions.forEach((v,i)=>{
      if(i!==0){
        const prev = this.positions[i-1]
        this._ctx.moveTo(prev[0],prev[1]);
        this._ctx.lineTo(v[0], v[1]);
        this._ctx.lineWidth = 1
        this._ctx.strokeStyle = "red"
      }
      this._ctx.stroke();
      if(this._collided|| this.positions.length>50){
        this.positions.shift()
      }
    })
  }
}