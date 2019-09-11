class Vector2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v2) {
    this.x += v2.x;
    this.y += v2.y;
    return this;
  }

  sub(vec2) {
    this.x -= v2.x;
    this.y -= v2.y;
    return this;
  }

  mult(scaler) {
    this.x * scaler;
    this.y * scaler;
    return this;
  }
}
