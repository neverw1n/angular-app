import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }
  

  getArticles(){
    return this.http.get<any[]>("http://localhost:3300/articles/")
      .pipe(tap((data)=>{
        console.log(data)
      }))
  }
}
