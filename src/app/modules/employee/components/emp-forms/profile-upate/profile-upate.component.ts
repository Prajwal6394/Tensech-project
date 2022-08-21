import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-upate',
  templateUrl: './profile-upate.component.html',
  styleUrls: ['./profile-upate.component.scss']
})
export class ProfileUpateComponent implements OnInit {
  profileUpdateForm = new FormGroup({
    employeeID: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    employeeName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
  })

  constructor() { }

  get employeeID(){
    return this.profileUpdateForm.get('employeeID');
  }
  get employeeName(){
    return this.profileUpdateForm.get('employeeName');
  }
get email(){
  return this.profileUpdateForm.get('email');
}
get contact(){
  return this.profileUpdateForm.get('contact');
}
get password(){
  return this.profileUpdateForm.get('password');
}
get confirmPassword(){
  return this.profileUpdateForm.get('confirmPassword');
}

onSubmit(){
  console.log(this.profileUpdateForm.value.employeeID);
  console.log(this.profileUpdateForm.value.employeeName);
  console.log(this.profileUpdateForm.value.email);
  console.log(this.profileUpdateForm.value.contact);
  console.log(this.profileUpdateForm.value.password);
  console.log(this.profileUpdateForm.value.confirmPassword);
}

  ngOnInit(): void {
  }

}
