export class Card {
  private _cardNumber: string;
  private _ccv: string;
  private _name: string = "";
  private _expiryDate: string = "";


  constructor(number: string, ccv: string, name: string, expiryDate: string) {
    this._cardNumber = number;
    this._ccv = ccv;
    this._name = name;
    this._expiryDate = expiryDate;
  }

  get cardNumber(): string {
    return this._cardNumber;
  }

  set cardNumber(number: string) {
    this._cardNumber = number;
  }

  get ccv(): string {
    return this._ccv;
  }

  set ccv(ccv: string) {
    this._ccv = ccv;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get expiryDate(): string {
    return this._expiryDate;
  }

  set expiryDate(expiryDate: string) {
    this._expiryDate = expiryDate;
  }
}
