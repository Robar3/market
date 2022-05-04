import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {InfoCoatModule} from "./info-coat/info-coat.module";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {ProductModule} from "./product/product.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InfoCoatModule,
    ScrollingModule,
    InfiniteScrollModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
