export default class Item {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
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

  set price(price: number) {
    if (price < 0 || !Number.isFinite(price)) {
      throw new Error("The item must have a valid price");
    }
    this._price = price;
  }

  get price(): number {
    return this._price;
  }
}
