import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
// import {AppComponent} from './app.component';
import {PosUiComponent} from "./pos-ui/pos-ui.component";
import { PaymentDialogComponent } from './pos-ui/payment-dialog/payment-dialog.component';
import { CashPaymentComponent} from "./pos-ui/cash-payment/cash-payment.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {CardPaymentComponent} from "./pos-ui/card-payment/card-payment.component";

@NgModule({
  declarations: [
    // AppComponent,
    PosUiComponent,
    PaymentDialogComponent,
    CashPaymentComponent,
    CardPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRadioModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [
    // AppComponent,
    PosUiComponent
  ]
})
export class AppModule {
}
