import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {PaymentDialogData} from "../../shared/PaymentDialogData";
import {PosNumbers} from "../../shared/PosNumbers";

@Component({
  selector: "cash-payment",
  templateUrl: "./cash-payment.html",
  styleUrls:["./cash-payment.scss"]
})

export class CashPaymentComponent implements PosNumbers{
  payment: string = "0.00";
  change: number = 0.00;

  constructor(@Inject(MAT_DIALOG_DATA) public paymentDialogData: PaymentDialogData) {
    paymentDialogData.payment = +this.payment;
    paymentDialogData.change = this.change;
  }

  clearDefaultValue()
  {
    if(this.payment == "0.00")
    {
      this.payment="";
    }
  }

  one() {
    this.clearDefaultValue();
    this.payment += "1";
  }

  two() {
    this.clearDefaultValue();
    this.payment += "2";
  }

  three() {
    this.clearDefaultValue();
    this.payment += "3";
  }

  four() {
    this.clearDefaultValue();
    this.payment += "4";
  }

  five() {
    this.clearDefaultValue();
    this.payment += "5";
  }

  six() {
    this.clearDefaultValue();
    this.payment += "6";
  }

  seven() {
    this.clearDefaultValue();
    this.payment += "7";
  }

  eight() {
    this.clearDefaultValue();
    this.payment += "8";
  }

  nine() {
    this.clearDefaultValue();
    this.payment += "9";
  }

  zero() {
    this.clearDefaultValue();
    this.payment += "0";
  }

  decimal() {
    this.clearDefaultValue();
    this.payment += ".";
  }

  computeChange() {
    this.paymentDialogData.change = +this.payment - this.paymentDialogData.totalPrice;
  }

  clear() {
    this.payment = "0.00"
  }
}
