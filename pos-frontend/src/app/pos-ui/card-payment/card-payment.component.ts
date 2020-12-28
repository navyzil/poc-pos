import {Component, ElementRef, ViewChild} from "@angular/core";
import {PosNumbers} from "../../shared/PosNumbers";
import {CardInfoService} from "../../services/CardInfoService";
import {CardDTO} from "../../dto/CardDTO";

@Component({
  selector: "card-payment",
  templateUrl: "./card-payment.html",
  styleUrls: ["./card-payment.scss"],
  providers:[CardDTO, CardInfoService]

})
export class CardPaymentComponent implements PosNumbers {
  @ViewChild('cardNumberInput', {static: false}) cardNumberInput!: ElementRef;
  @ViewChild('ccvInput', {static: false}) ccvInput!: ElementRef;

  isFocusedOnCardNumberInput: boolean;
  isFocusedOnCcvInput: boolean;
  cardNumber: string;
  cardCcv: string;

  constructor(public card:CardDTO, public cardInfoService:CardInfoService) {
    this.isFocusedOnCardNumberInput = true;
    this.isFocusedOnCcvInput = false;
    this.cardCcv = "";
    this.cardNumber = "";
  }

  one(): void {
    this.placeValueToInput("1");
  }


  two(): void {
    this.placeValueToInput("2");
  }

  three(): void {
    this.placeValueToInput("3");
  }

  four(): void {
    this.placeValueToInput("4");
  }

  five(): void {
    this.placeValueToInput("5");
  }

  six(): void {
    this.placeValueToInput("6");
  }

  seven(): void {
    this.placeValueToInput("7");
  }

  eight(): void {
    this.placeValueToInput("8");
  }

  nine(): void {
    this.placeValueToInput("9");
  }

  zero(): void {
    this.placeValueToInput("0");
  }

  private placeValueToInput(numericValue: string) {
    if (this.isFocusedOnCardNumberInput && this.cardNumber.length < 19) {
      this.cardNumber += numericValue;
    } else if(this.isFocusedOnCcvInput && this.cardCcv.length < 3) {
      this.cardCcv += numericValue;
    }
  }

  focusOnCardNumber() {
    console.log("focused on Card Number text");
    this.isFocusedOnCardNumberInput = true;
    this.isFocusedOnCcvInput = false;
  }

  focusOnCCV() {
    console.log("focused on CCV text");
    this.isFocusedOnCardNumberInput = false;
    this.isFocusedOnCcvInput = true;
  }

  clearField(textType: string) {
    if (textType == 'CardNumber') {
      this.cardNumber = "";
    } else {
      this.cardCcv = "";
    }
  }

  confirm() {
    console.log("Confirming Record of Card Number:",this.cardNumber, " with CCV:",this.cardCcv);
    let cardInfo = this.cardInfoService.getCardInfo(this.cardNumber, this.cardCcv);
    this.card.cardNumber = cardInfo.cardNumber;
    this.card.ccv = cardInfo.ccv;
    this.card.name = cardInfo.name;
    this.card.expiryDate = cardInfo.expiryDate;
  }
}
