export default class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    if (name.length > 3) {
      this._name = name;
    } else {
      throw new Error("The name must have more than 3 characters");
    }
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(birthDate: Date) {
    const today = new Date();
    const timeDiff = Math.abs(today.getTime() - birthDate.getTime());
    const age = Math.ceil(timeDiff / (1000 * 3600 * 24) / 365);
    // 1000 milliseconds/second * 3600 seconds/hour * 24 hours/day * 365 days/year
    // This is the formula to calculate the age in years
    // Convert the difference in milliseconds to years
    if (birthDate.getTime() > today.getTime()) {
      throw new Error("The birth date cannot be in the future");
    }
    if (age > 120) {
      throw new Error("The age cannot be greater than 120 years");
    }
    this._birthDate = birthDate;
  }
}
