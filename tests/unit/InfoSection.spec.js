import { shallowMount } from "@vue/test-utils";
import InfoSection from "@/components/InfoSection.vue";

describe("InfoSection.vue", () => {
  it("renders", () => {
    const msg = "Cellular Automaton";
    const wrapper = shallowMount(InfoSection, {
      stubs: ["v-row", "v-col", "v-container", "v-icon", "v-btn"]
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
