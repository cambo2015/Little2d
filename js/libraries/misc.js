const pnt = (x)=>console.log(x)
const vecAngle = (radian)=> new Vector2(Math.cos(radian),Math.sin(radian))

const randomRange =(min, max) =>{
  return Math.random() * (max - min) + min;
}

const randomColor = ()=>{
  const values = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
  let r,g,b
  const rand =()=>Math.floor(Math.random()*14)
  r = values[rand()].toString()
  r1 = values[rand()].toString()
  //console.log(r)
  //console.log(r1)
  g = values[rand()].toString()
  g1 = values[rand()].toString()
  //console.log(g)
  //console.log(g1)
  b = values[rand()].toString()
  b1 = values[rand()].toString()
  //console.log(b)
  //console.log(b1)
  return "#"+r+r1+g+g1+b+b1 
}

console.log(randomColor())

