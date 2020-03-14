export default class AutomataEngine {
  constructor(size, count, radius, states) {
    this.count = count;
    this.size = size;
    this.radius = radius;
    this.states = states;
    this.genealogy = [];
  }

  initFirstGeneration() {}

  getRandomState() {}
}
