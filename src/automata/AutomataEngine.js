export default class AutomataEngine {
  constructor(size, count, radius, states) {
    this.count = count;
    this.size = size;
    this.radius = radius;
    this.states = states;
    this.genealogy = [];
    this.transitions = [];
  }

  initFirstGeneration() {
    const iv = [];

    for (let i = 0; i < this.size; i++) {
      iv[i] = this.getRandomState();
    }

    this.genealogy.push(iv);
  }

  getRandomState() {
    return Math.floor(Math.random() * Math.floor(this.states));
  }

  generateTransitions() {
    const neighboorhoodSize = 2 * this.radius + 1;
    const maxSum = (this.states - 1) * neighboorhoodSize;

    for (let i = 0; i <= maxSum; i++) {
      this.transitions.push(this.getRandomState());
    }
  }

  calculateCell(cellIndex, generationIndex) {
    let neighboorhoodSum = 0;
    for (let i = cellIndex - this.radius; i <= cellIndex + this.radius; i++) {
      let neighborIndex = 0;

      if (i < 0) {
        neighborIndex = i + this.size;
      } else if (i > this.size - 1) {
        neighborIndex = i - this.size;
      } else {
        neighborIndex = i;
      }

      neighboorhoodSum += this.genealogy[generationIndex - 1][neighborIndex];
    }
    return this.transitions[neighboorhoodSum];
  }

  calculateGenealogy() {
    for (let i = 1; i < this.count; i++) {
      let newGen = new Array();
      for (let j = 0; j < this.size; j++) {
        newGen.push(this.calculateCell(j, i));
      }
      this.genealogy.push(newGen);
    }
  }

  debugPrint() {
    for (let i = 0; i < this.genealogy.length; i++) {
      console.log(this.genealogy[i]);
    }
  }
}
