import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Item} from "../models/Item";
import {MatDialog} from "@angular/material/dialog";
import {PaymentDialogComponent} from "./payment-dialog/payment-dialog.component";

@Component({
  selector: 'app-pos-ui-component',
  templateUrl: './pos-ui.component.html',
  styleUrls: ['./pos-ui.component.scss']
})
export class PosUiComponent {//implements OnInit {
  title = "POS-App";
  itemListArray: Array<String> = [];
  displayItemList: String = "";
  subTotalPrice: number = 0.00;
  totalPrice: number = 0.00;
  isDisabled: boolean = true;
  isNewTransactionDisabled: boolean=false;
  isPaymentDisabled: boolean=true;

  tax: number = 0.03;

  @ViewChild('itemList', {static: false}) itemListElement!: ElementRef;
  private itemInfoDiv!: any;

  constructor(private renderer: Renderer2, private dialog:MatDialog) {
    console.log("Pos-UI Component")
  }

  // ngOnInit(): void {
  //   this.isDisabled=true;
  // }

  clearItemList() {
    console.log("Void All items");
    console.log("Clearing itemList");

    Array.from(this.itemListElement.nativeElement.children).forEach(
      itemInfoDiv => {
        this.renderer.removeChild(this.itemListElement.nativeElement, itemInfoDiv);
      }
    );

    this.itemListArray = [];
    this.displayItemList = "";
    this.subTotalPrice = 0.00;
    this.totalPrice = 0.00;
  }

  addItemToItemList(item: string) {
    let itemName = item.split('-')[0].trim();
    let itemPrice = item.split('-')[1];

    this.itemListArray.push(item);
    this.renderItemListDisplay(itemName, item);

    console.log("itemPrice" + itemPrice);
    this.subTotalPrice += +itemPrice
  }

  private renderItemListDisplay(itemName: string, item: string) {
    let isItemAlreadyAdded = this.itemListArray.includes(item);
    let itemCount = isItemAlreadyAdded?this.itemListArray.filter(itemInArray => item == itemInArray).length:1;

    this.displayItemList = item + "x" + itemCount;

    this.itemInfoDiv = this.renderer.createElement('div');
    this.renderer.addClass(this.itemInfoDiv, 'item-info-div');
    this.renderer.setProperty(this.itemInfoDiv, 'id', itemName);

    let text = this.renderer.createText(this.displayItemList.toString());
    this.renderer.appendChild(this.itemInfoDiv, text);
    let elementToBeReplaced = itemCount>1?this.renderer.selectRootElement('#' + itemName, false):this.itemListElement.nativeElement;
    this.renderer.appendChild(elementToBeReplaced, this.itemInfoDiv);
  }

  checkoutItems() {
    this.isDisabled = true;
    this.totalPrice = this.subTotalPrice + (this.tax * this.subTotalPrice);
    this.isPaymentDisabled = false;
  }

  newTransaction() {
    this.clearItemList();
    this.isDisabled = false;
    this.isPaymentDisabled = true;
    this.isNewTransactionDisabled = true;

  }

  showPaymentDialog() {
    console.log("Show Payment Dialog")
    // this.isNewTransactionDisabled = false;
    this.isPaymentDisabled = true;
    const paymentDialog = this.dialog.open(PaymentDialogComponent,{
      width: '600px', height: '600px', data:{totalPrice: this.totalPrice}
    });

    paymentDialog.afterClosed().subscribe(value => {
      this.isNewTransactionDisabled = false;
    })
  }
}
