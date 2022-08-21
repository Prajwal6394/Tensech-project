import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
  });

  get email(){ return this.loginForm.get('email'); };
  get password(){ return this.loginForm.get('password'); }
 
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    // console.log(this.LoginForm.value);
    console.log(this.loginForm.value.email);
    console.log(this.loginForm.value.password);
  }

}
