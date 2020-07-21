<template>
  <v-app>
    <v-app-bar app color="primary" clipped-right dark dense>
      <div class="d-flex align-center">
        1D Cellular Automata
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/Thomas-Jean/cellular-automata/"
        target="_blank"
        icon
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>

      <v-btn @click="toggleSettings" icon>
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app right temporary clipped v-model="settings">
      <options-form
        :options="options"
        :toggle="settings"
        @close="toggleSettings"
      ></options-form>
    </v-navigation-drawer>

    <v-content>
      <v-container>
        <v-row>
          <v-col ref="canvas-parent" xs="12" md="8"
            ><canvas-grid
              ref="canvas-grid"
              :options="options"
              :width="width"
              :height="height"
            />
          </v-col>
          <v-col xs="12" md="4"><info-section @redraw="triggerRedraw"/></v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import OptionsForm from "./components/OptionsForm";
import CanvasGrid from "./components/CanvasGrid";
import InfoSection from "./components/InfoSection";

export default {
  name: "App",
  components: { OptionsForm, CanvasGrid, InfoSection },
  data: () => {
    return {
      settings: false,
      width: 0,
      height: 0,
      redraw: false,
      options: {
        generationSize: 20,
        generationCount: 30,
        radius: 2,
        states: 5,
        extended: false,
        generationDelay: 100
      }
    };
  },
  mounted() {
    this.width = this.floorPx(this.$refs["canvas-parent"].clientWidth);

    if (!this.width) {
      this.width = this.floorPx(window.innerWidth);
    }

    this.width -= 25;

    this.height = this.floorPx(window.innerHeight * 0.9);

    if (this.width && this.height) {
      this.$nextTick(() => {
        this.$refs["canvas-grid"].setupGrid();
      });
    }
  },
  methods: {
    toggleSettings() {
      this.settings = !this.settings;
    },
    floorPx(dim) {
      return dim - ((dim - 1) % 50) - 1;
    },
    triggerRedraw() {
      this.$nextTick(() => {
        this.$refs["canvas-grid"].buildEngine();
        this.$refs["canvas-grid"].setupGrid();
      });
    }
  }
};
</script>

<style type="text/scss"></style>
