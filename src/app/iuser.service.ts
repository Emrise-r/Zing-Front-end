import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


import {ILogin} from "./ilogin";
import {LoginRequest} from "./loginrequest";
const API_URL = 'http://localhost:8080/api/auth'
@Injectable({
  providedIn: 'root'
})
export class IUserService {

  constructor(private http: HttpClient) { }


  getLoginRequest(login: ILogin): Observable<LoginRequest> {
    return this.http.post<LoginRequest>(API_URL + `/login`, login)
  }
}
