<template>
  <canvas ref="main-canvas" :width="width" :height="height" />
</template>

<script>
export default {
  name: "CanvasGrid",
  props: ["options", "height", "width"],
  data: () => {
    return {
      canvas: null,
      context: null,
      gridOriginX: 0,
      gridOriginY: 0
    };
  },
  methods: {
    drawGrid() {
      let s = this.calculateCellSize();
      let nX = this.options.generationSize;
      let nY = this.options.generationCount;
      let pX = this.width - nX * s;
      let pY = this.height - nY * s;
      let pL = Math.ceil(pX / 2) - 0.5;
      let pT = Math.ceil(pY / 2) - 0.5;
      let pR = this.width - nX * s - pL;
      let pB = this.height - nY * s - pT;
      console.log("S: ", s);
      console.log("nY: ", nY);

      this.gridOriginX = pL;
      this.gridOriginY = pT;
      this.context.strokeStyle = "lightgrey";
      this.context.beginPath();

      for (var x = pL; x <= this.width - pR; x += s) {
        this.context.moveTo(x, pT);
        this.context.lineTo(x, this.height - pB);
      }

      for (var y = pT; y <= this.height - pB; y += s) {
        this.context.moveTo(pL, y);
        this.context.lineTo(this.width - pR, y);
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
