export class Item {
  private itemNo: string;
  private itemName: string;
  private itemPrice: number = 0.00;


  constructor(itemNo:string, itemName:string, itemPrice:number) {
    this.itemNo = itemNo;
    this.itemName = itemName;
    this.itemPrice = itemPrice;
  }

  get getItemNo(): string {
    return this.itemNo;
  }

  set setItemNo(value: string) {
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
