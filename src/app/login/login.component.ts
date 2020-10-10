import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {IUserService} from "../iuser.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginRequest} from "../loginrequest";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;


  loginRequest: LoginRequest = null;


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
    },error => {console.log(error)},
      () => {
      console.log("1");
        console.log(this.loginRequest);
        console.log("2");
        sessionStorage.setItem("user", JSON.stringify(this.loginRequest))
        this.loginRequest = JSON.parse((sessionStorage.getItem("user")))
        this.router.navigate(['']);
        console.log(this.loginRequest)
      }
      );


  }
}
