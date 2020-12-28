export class CardDTO {
  private _cardNumber: string = "";
  private _ccv: string = "";
  private _name: string = "";
  private _expiryDate: string = "";
  private _paymentStatus: string = "";


  get cardNumber(): string {
    return this._cardNumber;
  }

  set cardNumber(value: string) {
    this._cardNumber = value;
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

  get paymentStatus(): string {
    return this._paymentStatus;
  }

  set paymentStatus(value: string) {
    this._paymentStatus = value;
  }
}
