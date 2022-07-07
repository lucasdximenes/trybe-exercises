const uppercase = require("../exercise_7/script");

describe("Exercise 7", () => {
  it("should return a upper case string", (done) => {
    uppercase("hello", (result) => {
      try {
        expect(result).toBe("HELLO");
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
