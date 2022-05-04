import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInfoComponent } from './form-info.component';
import {FormControl, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    FormInfoComponent
  ],
  exports:[
    FormInfoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FormInfoModule { }
