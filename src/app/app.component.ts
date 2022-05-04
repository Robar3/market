import { Component } from '@angular/core';
import {coat, InfoService} from "./info.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(public infoService: InfoService) {

  }



}

