const { encode, decode } = require("../src/playgroundFunctions");

describe("Functions Encode and Decode", () => {
  // #1
  it("Verify if encode and decode are functions", () => {
    expect(typeof encode).toBe("function");
    expect(typeof decode).toBe("function");
  });

  // #2
  it("The return of encode('aeiou') should be 12345", () => {
    expect(encode("aeiou")).toBe("12345");
  });

  // #3
  it("The return of decode('12345') should be aeiou", () => {
    expect(decode("12345")).toBe("aeiou");
  });

  // #4
  it("The return of encode('abrobrinha') should be '1br4br3nh1'", () => {
    expect(encode("abrobrinha")).toBe("1br4br3nh1");
  });

  // #5
  it("The return of decode('1br4br3nh1') should be 'abrobrinha'", () => {
    expect(decode("1br4br3nh1")).toBe("abrobrinha");
  });

  // #6
  it("The return of encode or decode doesn't have different length", () => {
    expect(encode("abrobrinha").length).toBe(decode("1br4br3nh1").length);
  });
});
