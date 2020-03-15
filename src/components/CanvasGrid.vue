<template>
  <canvas ref="main-canvas" :width="width" :height="height" />
</template>

<script>
import AutomataEngine from "../automata/AutomataEngine";

export default {
  name: "CanvasGrid",
  props: ["options", "height", "width"],
  data: () => {
    return {
      canvas: null,
      context: null,
      gridOriginX: 0,
      gridOriginY: 0,
      cellSize: 0
    };
  },
  created() {
    const engine = new AutomataEngine(15, 20, 2, 5);
    engine.initFirstGeneration();
    engine.generateTransitions();
    engine.calculateGenealogy();
    // engine.debugPrint();
  },
  methods: {
    drawGrid() {
      let s = this.calculateCellSize();
      let numberX = this.options.generationSize;
      let numberY = this.options.generationCount;
      let pixelX = this.width - numberX * s;
      let pixelY = this.height - numberY * s;
      let pixelLeft = Math.ceil(pixelX / 2) - 0.5;
      let pixelTop = Math.ceil(pixelY / 2) - 0.5;
      let pixelRight = this.width - numberX * s - pixelLeft;
      let pixelBottom = this.height - numberY * s - pixelTop;

      this.cellSize = s;
      this.gridOriginX = pixelLeft;
      this.gridOriginY = pixelTop;
      this.context.strokeStyle = "lightgrey";
      this.context.beginPath();

      for (let x = pixelLeft; x <= this.width - pixelRight; x += s) {
        this.context.moveTo(x, pixelTop);
        this.context.lineTo(x, this.height - pixelBottom);
      }

      for (let y = pixelTop; y <= this.height - pixelBottom; y += s) {
        this.context.moveTo(pixelLeft, y);
        this.context.lineTo(this.width - pixelRight, y);
      }

      this.context.stroke();
    },
    calculateCellSize() {
      console.log(this.width, " x ", this.height);
      let a = Math.floor(this.width / (this.options.generationSize + 2));
      let b = Math.floor(this.height / (this.options.generationCount + 2));
      return Math.min(a, b);
    },
    setupGrid() {
      this.canvas = this.$refs["main-canvas"];
      this.context = this.canvas.getContext("2d");
      this.drawGrid();
    }
  }
};
</script>
