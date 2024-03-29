const classes = [
  //new MoveCircle(ctx),
  //new Fireworks(ctx)
  //new LerpPage(ctx)
  new GravityPage(ctx)
];
let speed = 0;
const onSpeedChange = e => {
  speed += e;
};

const FPS = 60;
const start = () => {
  if (classes.length > 0) {
    classes.forEach((x, i) => {
      x.start();
      if (x.onTouch) {
        canvas.addEventListener("touchstart", function(e) {
          x.onTouch(e, x);
        });
      }
    });
  }
};

const update = () => {
  timeCurrent = Date.now();
  timeEllapsed = (timeCurrent - timeStart) / FPS;
  timeStart = timeCurrent;
  setTimeout(() => {
    clearCanvas();
    window.requestAnimationFrame(update);
    if (classes.length > 0) {
      classes.forEach(x => {
        x.update();
      });
    }
  }, 1000 / FPS);
};

start();
update();
