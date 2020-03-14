<template>
  <v-app>
    <v-app-bar app color="primary" dark>
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
    <v-content>
      <v-navigation-drawer v-model="settings" right absolute>
        <options-form :options="options"></options-form>
      </v-navigation-drawer>
      <v-container>
        <v-row>
          <v-col ref="canvas-parent"
            ><canvas-grid
              ref="canvas-grid"
              :options="options"
              :width="width"
              :height="height"
            />
          </v-col>
          <v-col><hello-world /></v-col>
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
        generationSize: 25,
        generationCount: 40,
        radius: 5,
        generationDelay: 100
      }
    };
  },
  mounted() {
    this.options.generationSize = 20;
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
