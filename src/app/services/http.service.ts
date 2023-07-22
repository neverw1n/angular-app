import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

    getToken(body:{email: string, password: string}){
      
      return this.http.post('http://localhost:3300/login', body, {responseType: 'text'}); 
    }
   
}
