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

    <v-navigation-drawer app right clipped v-model="settings">
      <options-form :options="options"></options-form>
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
          <v-col xs="12" md="4"><hello-world /></v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import OptionsForm from "./components/OptionsForm";
import CanvasGrid from "./components/CanvasGrid";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: { OptionsForm, CanvasGrid, HelloWorld },
  data: () => {
    return {
      settings: false,
      width: 250,
      height: 400,
      options: {
        generationSize: 10,
        generationCount: 15,
        radius: 2,
        generationDelay: 100
      }
    };
  },
  mounted() {
    this.width = this.floorPx(this.$refs["canvas-parent"].clientWidth);
    this.height = this.floorPx(this.$refs["canvas-parent"].clientHeight);

    this.$nextTick(() => {
      this.$refs["canvas-grid"].setupGrid();
    });
  },
  methods: {
    toggleSettings() {
      this.settings = !this.settings;
    },
    floorPx(dim) {
      return dim - ((dim - 1) % 50) - 1;
    }
  }
};
</script>

<style type="text/scss"></style>
