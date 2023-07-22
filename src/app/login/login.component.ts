import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HttpService]
})
export class LoginComponent {
  response!: any[];
  done: boolean = false;  
  loginForm: FormGroup;
  constructor(public formBuilder : FormBuilder, private httpService: HttpService, private router: Router){
    this.loginForm = formBuilder.group({
      "email": ["", [ Validators.required, Validators.email]],
      "password": ["", [Validators.required]]
    })
    
  }

  submit(){
    this.httpService.getToken(this.loginForm.value)
            .subscribe({
                next:(data: any) => {console.log(data)
                  this.response = data
                  localStorage.setItem("token", data)
                  this.router.navigate(['/table']);
                },
                error: error => console.log(error)
            });
            
}
}
