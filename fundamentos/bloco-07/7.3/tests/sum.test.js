const sum = require("../src/sum");

describe("Function sum", () => {
  it("The return of sum(4, 5) should be 9", () => {
    expect(sum(4, 5)).toBe(9);
  });

  it("The return of sum(0, 0) should be 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('The return of sum(4, "5") should be Error', () => {
    expect(() => {
      sum(4, "5");
    }).toThrow();
  });

  it('The return message be "parameters must be numbers" when sum(4, "5")', () => {
    expect(() => {
      sum(4, "5");
    }).toThrowError("parameters must be numbers");
  });
});
