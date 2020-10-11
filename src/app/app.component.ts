import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {IUserService} from "./service/iuser.service";
import {Router} from "@angular/router";
import {Iloginrequest} from "./interface/Iloginrequest";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Zing-Front-End';
  loginRequest: Iloginrequest;

  constructor() {

  }

  ngOnInit(): void {
    this.loginRequest = JSON.parse((sessionStorage.getItem("user")))
  }
  logOut(): void {
    sessionStorage.removeItem("user")
  }

}
