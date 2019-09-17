const pnt = (x)=>console.log(x)
const vecAngle = (radian)=> new Vector2(Math.cos(radian),Math.sin(radian))

const randomRange =(min, max) =>{
  return Math.random() * (max - min) + max;
}

const random = (max)=>{
  let a = Math.floor(Math.random()*max)
  return a
}

const colorScheme = {
  first:[
  "#4CD964",
  "#FF9500",
  "#FF3B30",
  "#CC73E1",
  "#1BADF8"
  ]
  
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

const randomColor2 =(colorScheme)=>{
  const r = random(colorScheme.length-1)
  const color = colorScheme.filter((x,i) =>x === colorScheme[r])
  return color[0]
}
pnt(
  randomColor2(colorScheme.first))
//console.log(randomColor())

