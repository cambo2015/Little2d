const classes = [
  new MoveCircle(ctx)
  
  ];

const FPS = 60;
const start = () => {
  if (classes.length > 0) classes.forEach(x => x.start());
};

const update = () => {
  setTimeout(() => {
    clearCanvas()
    window.requestAnimationFrame(update)
    if (classes.length > 0) classes.forEach(x=>x.update())
  }, 1000 / FPS);
};

start();
update();
