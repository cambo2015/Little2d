class Text {
  constructor(text,position,size,color,ctx){
    this._text = text
    this._size = size.toString()
    this._font = "Arial"
    this._position = position
    this._ctx = ctx
    this._color = color
  }
  
  draw(){
    this._ctx.font = this._text
    this._ctx.fillStyle = this._color
    this.ctx.fillText(this._text,this._position.x,this._position.y)
  }
  
  get position(){return this._position}
  set position(value){this._position = value}
}