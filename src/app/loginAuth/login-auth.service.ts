import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor() { }

  isLoggedIn(){
    return localStorage.getItem('token');
  }
}
