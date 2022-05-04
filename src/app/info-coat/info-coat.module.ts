import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCoatComponent } from './info-coat.component';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import {FormInfoModule} from "../form-info/form-info.module";



@NgModule({
  declarations: [
    InfoCoatComponent
  ],
  exports:[
    InfoCoatComponent
  ],
  imports: [
    CommonModule,
    AngularYandexMapsModule,
    FormInfoModule
  ]
})
export class InfoCoatModule { }
