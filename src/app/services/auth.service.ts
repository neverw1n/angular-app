import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    const token = localStorage.getItem('token'); // get token from local storage

    if(!token) {
      return false;
    }
    return true;

  }
  getToken(){
    const token = localStorage.getItem('token');
    return token;
  }
}
