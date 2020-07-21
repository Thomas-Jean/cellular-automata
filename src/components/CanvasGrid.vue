<template>
  <canvas ref="main-canvas" :width="internalWidth" :height="internalHeight" />
</template>

<script>
import AutomataEngine from "../automata/AutomataEngine";
import AutomataPainter from "../automata/AutomataPainter";

export default {
  name: "CanvasGrid",
  props: ["options", "height", "width"],
  data() {
    return {
      canvas: null,
      context: null,
      engine: null,
      painter: null,
      internalHeight: this.height,
      internalWidth: this.width
    };
  },
  created() {
    this.buildEngine();
  },
  methods: {
    buildEngine() {
      this.engine = new AutomataEngine(
        this.options.generationSize,
        this.options.generationCount,
        this.options.radius,
        this.options.states
      );
      this.engine.initFirstGeneration();
      this.engine.generateTransitions();
      this.engine.calculateGenealogy();
    },
    setupGrid() {
      this.canvas = this.$refs["main-canvas"];
      this.context = this.canvas.getContext("2d");
      this.painter = new AutomataPainter(
        this.engine,
        this.context,
        this.width,
        this.height,
        this.options.extended
      );
      this.internalWidth = this.painter.appliedWidth;
      this.internalHeight = this.painter.appliedHeight;
      this.$nextTick(() => {
        this.painter.context = this.canvas.getContext("2d");
        this.context.clearRect(0, 0, this.internalWidth, this.internalHeight);
        this.painter.drawGrid(this.options.extended);
      });
    }
  }
};
</script>
