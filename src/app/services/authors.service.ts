import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }
  

  getAuthors(){
    return this.http.get<any[]>("http://localhost:3300/users/")
      .pipe(tap((data)=>{
        console.log(data)
      }))
  }
}
