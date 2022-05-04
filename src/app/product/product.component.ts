import { Component, OnInit } from '@angular/core';
import {coat, InfoService} from "../info.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  array: coat[] = [];
  sum = 15;
  arrLength = 15;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";


  constructor(public infoService: InfoService) {
    this.appendItems(0, 15);
  }

  ngOnInit(): void {
  }

  info(id: string) {
    this.infoService.isShowInfoCoat = true;
    this.infoService.idClothes = id;
  }

  addItems(startIndex: number, endIndex: number, _method: string) {
    for (let i = 0; i < this.sum; ++i) {

      // @ts-ignore
      this.array[_method](this.infoService.randomImg());
    }
  }

  appendItems(startIndex: number, endIndex: number) {
    this.addItems(startIndex, endIndex, "push");
  }


  onScrollDown() {

    if (this.arrLength <= 50) {
      const start = 0;
      this.sum = 3;
      this.appendItems(start, this.sum);
      this.arrLength += this.sum
      this.direction = "down";
    }
  }
}
