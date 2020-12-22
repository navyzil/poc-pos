import {Component, ElementRef, Inject, Renderer2, ViewChild} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {PaymentDialogData} from "../../shared/PaymentDialogData";

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.scss']
})

export class PaymentDialogComponent {
  @ViewChild('paymentModeDiv', {static: false}) paymentModeDiv!: ElementRef;

  payments: string[] = ['Cash', 'Card'];
  paymentType: string;

  constructor(private renderer: Renderer2, public dialogRef: MatDialogRef<PaymentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public paymentDialogData: PaymentDialogData) {
    console.log("Payment Dialog Component started");
    console.log("Total Price to Pay:{}", paymentDialogData.totalPrice);
    this.paymentType = 'Cash';
  }
}
