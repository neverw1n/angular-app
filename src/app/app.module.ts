import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule }   from '@angular/common/http';
import { TableComponent } from './table/table.component';

import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ViewTableComponent } from './view-table/view-table.component';
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { JWTInterceptor } from './jwt.interceptor';

const appRoutes: Routes =[
  {path: '', component: HomeComponent},
  { path: 'table', component: ViewTableComponent, canActivate: [AuthGuard],},
  {path: 'login', component: LoginComponent,
  
}
];

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LoginComponent,
    HomeComponent,
    ViewTableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService , 
   {
    provide: HTTP_INTERCEPTORS,
    useClass: JWTInterceptor,
    multi: true
   },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
