import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {IUserService} from "./service/iuser.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Iloginrequest} from "./interface/Iloginrequest";
import {ISong} from './interface/isong';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'Zing-Front-End';
  loginRequest: Iloginrequest;
  currentSong: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private cookie: CookieService
  ) {
    this.loginRequest = JSON.parse((sessionStorage.getItem("user")));
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((paramMap: ParamMap) => {
      paramMap.get('cookie')
      this.onChanges();
    })
  }

  onChanges() {
    this.loginRequest = JSON.parse((sessionStorage.getItem("user")));
    const newSong = this.cookie.get('current-song');
    console.log(newSong);
    if(this.currentSong != newSong) {
      this.currentSong = newSong;
    }
  }

  logOut(): void {
    sessionStorage.removeItem("user")
  }

}
