const classes = [
  new MoveCircle(ctx),
  new Explosion(ctx)
  
  ];

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
