class LerpPage extends IAnimate{
  constructor(ctx){
    super()
    this.ctx = ctx
    this.circles = []
    this.t =0
    this.lineColor = "gray"
  }
  
  start(){
    for(let x=0;x<window.innerWidth;x++){
      for(let y=0;y<window.innerHeight;y++){
        this.circles.push(new Circle(
      x*20-window.innerWidth,
      y*20-window.innerHeight,
      1,
      //"gray",
      randomColor2(colorScheme.first),
      ctx))
      }
    }
      
      
  }
  
  update(){
    this.t= (this.t==1)?0:this.t
    this.halve(this.circles)
  }
  
  halve(arr){
    if(arr.length==1){
      arr[0].draw()
      return
    }
    let first = arr.splice(0,arr.length/2)
    let second = arr.splice(arr.length/2-1,arr.length)
    this.halve(first)
    this.halve(second)
    //arr1[0].position.lerp(new Vector2(0,0),this.t+=.001)
  }
}