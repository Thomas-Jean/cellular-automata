<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-6 pt-6">
        <h4 class="display-2 font-weight-bold mb-3">
          Cellular Automaton
        </h4>

        <p class="font-weight-regular">
          This One Dimensional Cellular Automaton shows a series of transitions
          of a group of "cells" over a discrete time
        </p>
        <p class="font-weight-regular">
          Depending on these transitions, static, repeating or chaotic patterns
          can emerge
        </p>
        <p class="font-weight-regular">
          Additional Reading:<br />
          <a href="https://mathworld.wolfram.com/CellularAutomaton.html"
            >Wolfram</a
          >
          <br />
          <a href="https://en.wikipedia.org/wiki/Cellular_automaton"
            >Wikipedia</a
          >
        </p>
        <p class="font-weight-regular">
          Click the gear (<v-icon>mdi-cog</v-icon>) to customize the automata's
          setting
        </p>
        <v-btn color="primary" @click="redraw" block>Redraw Grid</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "InfoSection",
  methods: {
    redraw() {
      this.$emit("redraw");
    }
  }
};
</script>
