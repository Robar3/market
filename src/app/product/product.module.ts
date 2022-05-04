import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";



@NgModule({
  declarations: [
    ProductComponent
  ],
  exports:[ProductComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule
  ]
})
export class ProductModule { }
