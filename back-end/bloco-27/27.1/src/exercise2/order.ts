import Client from "./client";
import Item from "./item";

type PaymentMethods = "Cash" | "Credit card" | "Debit card";

export default class Order {
  private _client: Client;
  private _items: Item[];
  private _paymentMethod: PaymentMethods;
  private _discount: number;

  constructor(
    client: Client,
    items: Item[],
    paymentMethod: PaymentMethods,
    discount: number = 0
  ) {
    this.client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  set client(client: Client) {
    this._client = client;
  }

  get client(): Client {
    return this._client;
  }

  set items(items: Item[]) {
    if (!items.length) {
      throw new Error("The order must have at least one item");
    }
    this._items = items;
  }

  get items(): Item[] {
    return this._items;
  }

  set paymentMethod(paymentMethod: PaymentMethods) {
    this._paymentMethod = paymentMethod;
  }

  get paymentMethod(): PaymentMethods {
    return this._paymentMethod;
  }

  set discount(discount: number) {
    if (discount >= 0 && discount <= 1) {
      this._discount = discount;
    } else {
      throw new Error("The discount must be between 0 and 1. Example: 0.1");
    }
  }

  get discount(): number {
    return this._discount;
  }

  totalWithoutDiscount(): number {
    return this._items.reduce((acc, item) => acc + item.price, 0);
  }

  totalWithDiscount(): number {
    const total = this.totalWithoutDiscount();
    const discount = total * this._discount;
    return total - discount;
  }
}
