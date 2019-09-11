class Circle {
  constructor(x, y, r, color, ctx) {
    this.ctx = ctx;
    this.position = new Vector2(x, y);
    this.radius = r;
    this.color = color;
    this.ctx = ctx;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    this.ctx.strokeStyle = this.color;
    this.ctx.stroke();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
}
