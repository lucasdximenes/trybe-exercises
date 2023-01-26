import Court from "./Court";

export default class Club {
  private _courts: Court[];

  constructor() {
    this._courts = [];
  }

  public addCourt(court: Court): void {
    this._courts.push(court);
  }

  public getCourt<T extends Court>(index: number): T {
    return this._courts[index] as T;
  }

  public getAllCourts(): Court[] {
    return this._courts;
  }
}
