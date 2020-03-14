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
          v-model.number="options.generationCount"
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
          v-model.number="options.radius"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          label="Generation Delay (ms)"
          placeholder="100"
          v-model.number="options.generationDelay"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "OptionsForm",
  props: ["options"]
};
</script>

<style type="text/scss"></style>
