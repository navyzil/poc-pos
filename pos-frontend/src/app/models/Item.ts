export class Item {
  private itemNo: number = 0;
  private itemName: string = "";
  private itemPrice: number = 0.00;


  constructor() {
  }

  get getItemNo(): number {
    return this.itemNo;
  }

  set setItemNo(value: number) {
    this.itemNo = value;
  }

  get getItemName(): string {
    return this.itemName;
  }

  set setItemName(value: string) {
    this.itemName = value;
  }

  get getItemPrice(): number {
    return this.itemPrice;
  }

  set setItemPrice(value: number) {
    this.itemPrice = value;
  }
}
