import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";

export interface PaymentDialogData {
  totalPrice: number;
  payment: number;
  change: number;
}

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.scss']
})
export class PaymentDialogComponent {
  payment: string = "0.00";
  change: number = 0.00;

  constructor(public dialogRef: MatDialogRef<PaymentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public paymentDialogData: PaymentDialogData) {
    console.log("Payment Dialog Component started");
    console.log("Total Price to Pay:{}", paymentDialogData.totalPrice);
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

  one(number: string) {
    this.clearDefaultValue();
    this.payment += number;
  }

  two(number: string) {
    this.clearDefaultValue();
    this.payment += number;
  }

  three(number: string) {
    this.clearDefaultValue();
    this.payment += number;
  }

  four(number: string) {
    this.clearDefaultValue();
    this.payment += number;
  }

  five(number: string) {
    this.clearDefaultValue();
    this.payment += number;
  }

  six(number: string) {
    this.clearDefaultValue();
    this.payment += number;
  }

  seven(number: string) {
    this.clearDefaultValue();
    this.payment += number;
  }

  eight(number: string) {
    this.clearDefaultValue();
    this.payment += number;
  }

  nine(number: string) {
    this.clearDefaultValue();
    this.payment += number;
  }

  zero(number: string) {
    this.clearDefaultValue();
    this.payment += number;
  }

  decimal(decimal: string) {
    this.clearDefaultValue();
    this.payment += decimal;
  }

  computeChange() {
      this.paymentDialogData.change = +this.payment - this.paymentDialogData.totalPrice;
  }

  clear() {
    this.payment = "0.00"
  }
}
