import { colors } from "../assets/colors";

export default class AutomataPainter {
  constructor(engine, context, width, height, extended = false) {
    this.engine = engine;
    this.context = context;
    this.width = width;
    this.height = height;
    this.appliedWidth = null;
    this.appliedHeight = null;
    this.cellSize = null;
    this.calculateCellSize(extended);
    this.calculateAppliedSize();
  }

  drawCells(pixelLeft, pixelTop, cellSize) {
    let cellCornerX = pixelLeft;
    let cellCornerY = pixelTop;
    let row = null;
    let cell = null;

    for (let j = 0; j < this.engine.count; j++) {
      cellCornerX = pixelLeft;
      row = this.engine.genealogy[j];
      for (let i = 0; i < this.engine.size; i++) {
        cell = row[i];
        this.context.fillStyle = colors[cell].hex;
        this.context.fillRect(cellCornerX, cellCornerY, cellSize, cellSize);
        cellCornerX += cellSize;
      }
      cellCornerY += cellSize;
    }
  }

  drawGridLines(pixelLeft, pixelRight, pixelTop, pixelBottom, cellSize) {
    this.context.strokeStyle = "lightgray";
    this.context.beginPath();

    for (let x = 0; x <= this.appliedWidth; x += cellSize) {
      this.context.moveTo(x, 0);
      this.context.lineTo(x, this.innerHeight);
    }

    for (let y = 0; y <= this.appliedHeight; y += cellSize) {
      this.context.moveTo(pixelLeft, y);
      this.context.lineTo(this.width - pixelRight, y);
    }

    this.context.stroke();
  }

  drawGrid() {
    // let pixelX = this.width - this.engine.size * this.cellSize;
    // let pixelY = this.height - this.engine.count * this.cellSize;
    let pixelLeft = 0.5;
    let pixelTop = 0.5;
    let pixelRight = this.width - this.engine.size * this.cellSize + 1;
    let pixelBottom = this.height - this.engine.count * this.cellSize + 1;
    this.drawGridLines(
      pixelLeft,
      pixelRight,
      pixelTop,
      pixelBottom,
      this.cellSize
    );
    this.drawCells(pixelLeft, pixelTop, this.cellSize);
  }

  calculateAppliedSize() {
    this.appliedWidth = this.engine.size * this.cellSize;
    this.appliedHeight = this.engine.count * this.cellSize;
  }

  calculateCellSize(extended) {
    let a = Math.floor(this.width / this.engine.size);
    let b = Math.floor(this.height / this.engine.count);

    if (extended) {
      this.cellSize = a;
    } else {
      this.cellSize = Math.min(a, b);
    }

    return this.cellSize;
  }
}
