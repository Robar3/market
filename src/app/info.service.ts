import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  public isShowInfoCoat: boolean = false;
  public isShowFormInfo: boolean = false;
  public idClothes: string = '0';

  constructor() {
  }

  coats = [new coat("1", '../assets/coat1.jpg', '555',"Белое пальто"),
    new coat("2", '../assets/coat2.jpg', '777','Серое пальто'),
    new coat("3", '../assets/coat3.jpg', '1222',"Красное пальто")];


  randomImg() {

    return this.coats[Math.floor(Math.random() * this.coats.length)];
  };

   getRandomArbitrary(min:number, max:number) {
    return Math.random() * (max - min) + min;
  }
}

export class coat {
  coatId: string;
  img: string;
  price: string;
  description:String;

  constructor(coatId: string, img: string, price: string,description:string) {
    this.coatId = coatId;
    this.img = img;
    this.price = price;
    this.description=description;
  }
}
