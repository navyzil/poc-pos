import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
// import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PosUiComponent} from "./pos-ui/pos-ui.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    // AppComponent,
    PosUiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [
    // AppComponent,
    PosUiComponent
  ]
})
export class AppModule {
}
