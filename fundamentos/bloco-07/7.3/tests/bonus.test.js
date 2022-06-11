const searchEmployee = require("../src/bonus");

describe("Function searchEmployee", () => {
  it("Verify if function exist", () => {
    expect(searchEmployee).toBeDefined();
  });

  it("Verify if searchEmployee is a function", () => {
    expect(typeof searchEmployee).toBe("function");
  });

  it("Should return the employee's first name", () => {
    expect(searchEmployee("8579-6", "firstName")).toBe("Ana");
  });

  it("Should return the employee's last name", () => {
    expect(searchEmployee("8579-6", "lastName")).toBe("Gates");
  });

  it("Should return the employee's specialities", () => {
    expect(searchEmployee("8579-6", "specialities")).toEqual(["UX", "Design"]);
  });

  it("Should return error if id has not been found", () => {
    expect(() => {
      searchEmployee("12345-6", "firstName");
    }).toThrow();
  });

  it("Should return error message 'ID não identificada' if id has not been found", () => {
    expect(() => {
      searchEmployee("12345-6", "firstName");
    }).toThrowError("ID não identificada");
  });

  it("Should return error if detail is not available", () => {
    expect(() => {
      searchEmployee("8579-6", "lastNamee");
    }).toThrow();
  });

  it("Should return error message 'Informação indisponível' if detail is not available", () => {
    expect(() => {
      searchEmployee("8579-6", "lastNamee");
    }).toThrowError("Informação indisponível");
  });
});
