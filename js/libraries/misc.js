const pnt = (x)=>console.log(x)
const vecAngle = (radian)=> new Vector2(Math.cos(radian),Math.sin(radian))

const randomRange =(min, max) =>{
  return Math.random() * (max - min) + min;
}