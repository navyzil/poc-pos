import {Card} from "../models/Card";
import {Injectable} from "@angular/core";

@Injectable()
export class CardInfoService {
  private cardInfo: Card | undefined;
  private listOfCardInfo: Card[];

  constructor() {
    this.listOfCardInfo = new Array();
    this.listOfCardInfo.push(new Card("1234567890000001", "111", "John Smith", "12-2021", true));
    this.listOfCardInfo.push(new Card("1234567890123456789", "112", "John Doe", "01-2022", false));
    this.listOfCardInfo.push(new Card("1234567890000000001", "113", "Jane Doe", "12-2021",false));
    this.listOfCardInfo.push(new Card("1234567891234567", "114", "Jane Smith", "01-2022", true));
  }

  public getCardInfo(cardNumber: string, ccv: string): Card {
    let cardInfo = this.listOfCardInfo.find(card => {
      console.log("card.cardNumber:", card.cardNumber)
      console.log("cardNumber:", cardNumber)
      console.log("card.ccv", card.ccv)
      console.log("ccv:", ccv)
      let isCardFound = (card.cardNumber == cardNumber && card.ccv == ccv);
      console.log("isCardFound:", isCardFound)
      if (isCardFound) {
        return card;
      }
      return undefined;
    });
    if (cardInfo == undefined) {
      this.cardInfo = new Card("0000000000000000", "000", "User not found", "N/A", false)
      return this.cardInfo;
    }
    this.cardInfo = new Card(cardInfo.cardNumber, cardInfo.ccv, cardInfo.name, cardInfo.expiryDate, cardInfo.isActive)
    return this.cardInfo;
  }
}
