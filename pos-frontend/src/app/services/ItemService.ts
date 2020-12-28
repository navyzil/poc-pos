import {Item} from "../models/Item";

export class ItemService {
  private listOfItemInfo: Item[];

  constructor() {
    this.listOfItemInfo = new Array();
    this.listOfItemInfo.push(new Item("001", "Drink 1", 1.00));
    this.listOfItemInfo.push(new Item("002", "Drink 2", 2.00));
    this.listOfItemInfo.push(new Item("003", "Drink 3", 3.00));
    this.listOfItemInfo.push(new Item("004", "Dessert 1", 4.00));
    this.listOfItemInfo.push(new Item("005", "Dessert 2", 5.00));
    this.listOfItemInfo.push(new Item("006", "Dessert 3", 6.00));
    this.listOfItemInfo.push(new Item("007", "Ala Carte 1", 7.00));
    this.listOfItemInfo.push(new Item("008", "Ala Carte 2", 8.00));
    this.listOfItemInfo.push(new Item("009", "Ala Carte 3", 9.00));
    this.listOfItemInfo.push(new Item("010", "Meal 1", 10.00));
    this.listOfItemInfo.push(new Item("011", "Meal 2", 11.00));
    this.listOfItemInfo.push(new Item("012", "Meal 3", 12.00));
  }

  public getAllItems(): Item[] {
    return this.listOfItemInfo;
  }
}
