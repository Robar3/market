import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {InfoService} from "../info.service";

@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.css']
})
export class FormInfoComponent implements OnInit {

  constructor(public infoService: InfoService) {}

  ngOnInit(): void {
  }

  public infoForm: FormGroup = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
  });

  onSubmit() {
console.log(this.infoForm.value);
  }

  exit() {
    this.infoService.isShowFormInfo=false;
  }
}
