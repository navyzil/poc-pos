export class Card {
  private _number: string = "";
  private _ccv: string = "";
  private _name: string="";
  private _expiryDate: string = "";

  constructor() {
  }


  get number(): string {
    return this._number;
  }

  set number(value: string) {
    this._number = value;
  }

  get ccv(): string {
    return this._ccv;
  }

  set ccv(value: string) {
    this._ccv = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get expiryDate(): string {
    return this._expiryDate;
  }

  set expiryDate(value: string) {
    this._expiryDate = value;
  }
}
