export default class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  set name(name: string) {
    if (name.length < 3) {
      throw new Error("The name must have at least 3 characters");
    }
    this._name = name;
  }

  get name(): string {
    return this._name;
  }
}
