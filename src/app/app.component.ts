import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {IUserService} from './service/iuser.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Iloginrequest} from './interface/Iloginrequest';
import {ISong} from './interface/isong';
import {ISongService} from './service/isong.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Zing-Front-End';
  loginRequest: Iloginrequest;

  constructor(private formBuilder: FormBuilder,
              private router: Router) {
    this.loginRequest = JSON.parse((sessionStorage.getItem('user')));
    
  }
  ngOnInit(): void {

  }

  onChanges() {
    this.loginRequest = JSON.parse((sessionStorage.getItem('user')));
  }

  logOut(): void {
    sessionStorage.removeItem('user');
  }


}
