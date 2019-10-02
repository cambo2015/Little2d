const CANVASCOLOR = "black"
const bounds ={x:-window.innerWidth,y:-window.innerHeight}
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.canvas.width = bounds.x*-1;
ctx.canvas.height = bounds.y*-1;
ctx.transform(1, 0, 0, -1, 0, canvas.height)
ctx.translate((bounds.x*-1)/2,(bounds.y*-1)/2)
ctx.fillStyle = CANVASCOLOR;
ctx.fillRect(-bounds.x,-bounds.y,canvas.width,canvas.height)

const clearCanvas = () => {
  
  ctx.fillStyle = CANVASCOLOR
  ctx.clearRect(bounds.x, bounds.y, canvas.width, canvas.height);
  ctx.fillRect(bounds.x,bounds.y,Math.pow(canvas.width,2),Math.pow(canvas.height,2))
};

const canvasBounds = ()=>{
  return new Vector2(window.innerWidth,window.innerHeight)
}


var timeStart = 0
var timeCurrent =0
var timeEllapsed = 0

