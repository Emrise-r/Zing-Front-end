import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {IUserService} from "./iuser.service";
import {Router} from "@angular/router";
import {LoginRequest} from "./loginrequest";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Zing-Front-End';
  loginRequest: LoginRequest;

  constructor(){

  }


  ngOnInit(): void {
    this.loginRequest= JSON.parse((sessionStorage.getItem("user")))
    console.log(JSON.parse((sessionStorage.getItem("user"))))
  }





}
