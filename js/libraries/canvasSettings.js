var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
ctx.canvas.fillStyle = "black";

const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const canvasBounds = ()=>{
  return new Vector2(window.innerWidth,window.innerHeight)
}
