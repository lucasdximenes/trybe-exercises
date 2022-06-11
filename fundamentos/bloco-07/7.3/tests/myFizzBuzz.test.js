const myFizzBuzz = require("../src/myFizzBuzz");

describe("Function myFizzBuzz", () => {
  // #1
  it('The return of myFizzBuzz(15) should be "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });

  // #2
  it('The return of myFizzBuzz(3) should be "fizz"', () => {
    expect(myFizzBuzz(3)).toBe("fizz");
  });

  // #3
  it('The return of myFizzBuzz(5) should be "buzz"', () => {
    expect(myFizzBuzz(5)).toBe("buzz");
  });

  // #4
  it("The return of myFizzBuzz(4) should be 4", () => {
    expect(myFizzBuzz(4)).toBe(4);
  });

  // #5
  it("The return of myFizzBuzz('7') should be false", () => {
    expect(myFizzBuzz("7")).toBe(false);
  });
});
