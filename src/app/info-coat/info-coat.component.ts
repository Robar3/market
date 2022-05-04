import { Component, OnInit } from '@angular/core';
import {InfoService} from "../info.service";

@Component({
  selector: 'app-info-coat',
  templateUrl: './info-coat.component.html',
  styleUrls: ['./info-coat.component.css']
})
export class InfoCoatComponent implements OnInit {

  constructor(public infoService: InfoService) { }

  imgAdresse='../'+this.infoService.coats[+this.infoService.idClothes-1].img;
  ngOnInit(): void {
  }

    latitude=this.infoService.getRandomArbitrary(55.655717,55.857943);
    longitude =this.infoService.getRandomArbitrary(37.485754,37.728423);

  randomCoordinate=[this.latitude,this.longitude]
  userInfo() {
    this.infoService.isShowFormInfo=true;
  }

  closeInfo() {
    this.infoService.isShowInfoCoat=false;
    this.infoService.isShowFormInfo=false;
  }
}
