import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders", () => {
    const msg = "Welcome to Vuetify";
    const wrapper = shallowMount(HelloWorld, {
      stubs: ["v-row", "v-col", "v-container"]
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
