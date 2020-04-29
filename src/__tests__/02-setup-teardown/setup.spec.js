describe("TestSetup", () => {
  const avengers = [];
  beforeAll(() => {
    avengers.push("Hulk");
  });

  it("Call Hulk for support", () => {
    expect(avengers).toContain("Hulk");
    expect(avengers.length).toBe(1);
  });

  afterEach(() => {
    avengers.splice(0, 1);
    avengers.push("Iron man");
  });

  it("Hulk is down, call Iron man", () => {
    expect(avengers).toContain("Iron man");
    expect(avengers.length).toBe(1);
  });

  describe("Hulk is down and Iron man is not longer needed. Call Thor", () => {
    beforeAll(() => {
      avengers.splice(0, 1);
    });

    beforeEach(() => {
      avengers.push("Thor");
    });

    afterAll(() => {
      avengers.splice(0, 1);
      avengers.push("Hulk");
    });

    it("Thor is fighting enemies, Hulk is still down and no signs of Iron man", () => {
      expect(avengers).not.toContain("Hulk");
      expect(avengers).not.toContain("Iron man");
      expect(avengers).toContain("Thor");
    });

    it("Thor keeps fighting", () => {
      expect(avengers).not.toContain("Hulk");
      expect(avengers).toContain("Thor");
    });
  });

  it("Thor is not longer needed, Hulk is recovered and Iron finally show up", () => {
    // do not change this test contents
    expect(avengers).not.toContain("Thor");
    expect(avengers).toContain("Hulk");
    expect(avengers).toContain("Iron man");
    expect(avengers.length).toBe(2);
  });
});
