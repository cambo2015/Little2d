const classes = [
 // new MoveCircle(ctx),
  new Fireworks(ctx)
  
  ];
let speed = 0
const onSpeedChange=(e)=>{
  speed+= e
}
const FPS = 60;
const start = () => {
  if (classes.length > 0) classes.forEach(x => x.start());
};

const update = () => {
  
  timeCurrent = Date.now()
  timeEllapsed = (timeCurrent - timeStart)/FPS;
  timeStart = timeCurrent;
  setTimeout(() => {
    clearCanvas()
    window.requestAnimationFrame(update)
    if (classes.length > 0) classes.forEach(x=>x.update())
  }, 1000 / FPS);
};

start();
update();
