import AutomataEngine from "../../src/automata/AutomataEngine";

describe("AutomataEngine", () => {
  let engine;
  const size = 10;
  const count = 15;
  const radius = 2;
  const states = 5;

  beforeEach(() => {
    engine = new AutomataEngine(size, count, radius, states);
  });

  describe("Constructor", () => {
    it("initializes the options and internal state", () => {
      expect(engine.size).toEqual(10);
      expect(engine.count).toEqual(15);
      expect(engine.radius).toEqual(2);
      expect(engine.states).toEqual(5);
      expect(engine.transitions).toEqual([]);
      expect(engine.genealogy).toEqual([]);
    });
  });

  describe("initFirstGeneration", () => {
    it("initializes an array of random states", () => {
      engine.initFirstGeneration();

      expect(engine.genealogy.length).toEqual(1);
      expect(engine.genealogy[0].length).toEqual(size);

      for (let cell of engine.genealogy[0]) {
        expect(cell).toBeGreaterThanOrEqual(0);
        expect(cell).toBeLessThan(states);
      }
    });
  });

  describe("getRandomState", () => {
    it("generates a random number from [0, states)", () => {
      const result = engine.getRandomState();

      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(states);
    });
  });

  describe("generateTransitions", () => {
    it("initializes the array of possible", () => {
      const expectedSize = 21;
      engine.generateTransitions();

      expect(engine.transitions.length).toEqual(expectedSize);

      for (let transition of engine.transitions) {
        expect(transition).toBeGreaterThanOrEqual(0);
        expect(transition).toBeLessThan(states);
      }
    });
  });

  describe("calculateGenealogy", () => {
    it("generates a matrix of cell generations", () => {
      const engine = new AutomataEngine(10, 20, 2, 5);
      engine.generateTransitions();
      engine.initFirstGeneration();
      engine.calculateGenealogy();

      for (let generation of engine.genealogy) {
        for (let cell of generation) {
          expect(cell).toBeGreaterThanOrEqual(0);
          expect(cell).toBeLessThan(states);
        }
      }
    });
  });

  // describe("calculateCell", () => {
  //   it("initializes the options and internal state", () => {
  //     const engine = new AutomataEngine(10,20,2,5)
  //   })
  // })
});
