const myRemove = require("../src/myRemove");

describe("Function myRemove", () => {
  it("The return of myRemove([1, 2, 3, 4], 3) should be [1, 2, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it("The return of myRemove([1, 2, 3, 4], 3) shouldn't be [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it("The return of myRemove([1, 2, 3, 4], 5) should be [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
