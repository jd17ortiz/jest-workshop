import isEven from "../../01-beginning/is-even";

describe("Number is even", function () {
  it("5 + 2 equal odd", () => {
    expect(isEven(1, 2)).toBeFalsy();
  });

  it("2 + 2 equal even", () => {
    expect(isEven(6, 4)).toBeTruthy();
  });
});
