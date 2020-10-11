import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {IUserService} from "../service/iuser.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Iloginrequest} from "../interface/Iloginrequest";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;


  loginRequest: Iloginrequest = null;


  constructor(private formBuilder: FormBuilder,
              private userService: IUserService,
              private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: new FormControl(),
      password: new FormControl(),
    })
  }
  findUser(): void {
    const login = this.userForm.value;

    this.userService.getLoginRequest(login).subscribe(next => {
        this.loginRequest = next;
      }, error => {
        alert("ban chua co tai khoan hoac thong tin dang nhap sai")
      },
      () => {
        sessionStorage.setItem("user", JSON.stringify(this.loginRequest))
        this.loginRequest = JSON.parse((sessionStorage.getItem("user")))
      }
    );
  }
}
