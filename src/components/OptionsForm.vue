<template>
  <v-container>
    <v-row>
      <v-col><b>Options</b></v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          label="Generation Size"
          placeholder="20"
          hide-details="auto"
          v-model.number="options.generationSize"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          label="Generation Count"
          placeholder="30"
          hide-details="auto"
          v-model.number="options.generationCount"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          label="States"
          placeholder="5"
          hide-details="auto"
          v-model.number="options.states"
          :rules="stateRules"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          label="Neighborhood Radius"
          placeholder="5"
          hide-details="auto"
          v-model.number="options.radius"
          :rules="radiusRules"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-checkbox
          v-model="options.extended"
          label="Extend Grid"
          hide-details="auto"
          dense
          outlined
        ></v-checkbox>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn color="primary" @click="$emit('close')" block dense>Close</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "OptionsForm",
  props: ["options", "toggle"],
  data() {
    return {
      stateRules: [x => x < 10 || "At most 9 states"],
      radiusRules: [x => this.maxRadius(x)]
    };
  },
  methods: {
    maxRadius(radius) {
      return (
        radius < Math.floor(this.options.generationSize / 2) - 1 ||
        "Reduce neighborhood radius size"
      );
    }
  }
};
</script>
