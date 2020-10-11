import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {IUserService} from "./service/iuser.service";
import {Router} from "@angular/router";
import {Iloginrequest} from "./interface/Iloginrequest";
import {ISong} from './interface/isong';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Zing-Front-End';
  loginRequest: Iloginrequest;
  // songForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private router: Router
              ) {

  }

  ngOnInit(): void {
    this.loginRequest = JSON.parse((sessionStorage.getItem("user")));
    // this.songForm = this.formBuilder.group({
    //   search: new FormControl()
    // })
  }
  logOut(): void {
    sessionStorage.removeItem("user")
  }
  // searchByName(){
  //   const name = this.songForm.value;
  //   this.router.navigate(['/search', name])
  // }
}
