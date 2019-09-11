class MoveCircle extends IAnimate {
  constructor(ctx) {
    super();
    this.circle = new Circle(100, 100, 100, "green", ctx);
  }

  start() {}

  update() {
    this.circle.position.x += 1;
    this.circle.draw();
  }
}
