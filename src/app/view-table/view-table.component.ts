import { ChangeDetectionStrategy, ChangeDetectorRef, Component, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { AuthorsService } from '../services/authors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css']
})
export class ViewTableComponent {
  constructor(private articleService: ArticleService, private authorsService: AuthorsService, private router: Router) { }
   
   articles!: any[];
   authors!: any[];
   headersName = ["Authors", "Articles"];
   ngOnInit() {
      this.articleService.getArticles().subscribe((data) => {
        this.articles = data;
      })
      this.authorsService.getAuthors().subscribe((data) => {
         this.authors = data;
       })
       
   }

   Logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
   }
}
