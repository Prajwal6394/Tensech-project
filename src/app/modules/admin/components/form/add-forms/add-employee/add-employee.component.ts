import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  addEmployee = new FormGroup({
    employeeID: new FormControl('', [Validators.required ,]),
    employeeName: new FormControl('', [Validators.required ,]),
    email: new FormControl('', [Validators.required ,]),
    contact: new FormControl('', [Validators.required ,]),
    department: new FormControl('', [Validators.required ,]),
    userType: new FormControl('', [Validators.required ,]),
    createPass: new FormControl('', [Validators.required ,]),
    confirmPass: new FormControl('', [Validators.required ,]),
  });

  constructor() {}

  get employeeID(){
    return this.addEmployee.get('employeeID');
  }
  get employeeName(){
    return this.addEmployee.get('employeeName');
  }

  get email(){
    return this.addEmployee.get('email');
  }
  get contact(){
    return this.addEmployee.get('contact');
  }
  get department(){
    return this.addEmployee.get('department');
  }
  get userType(){
    return this.addEmployee.get('userType');
  }
  get createPass(){
    return this.addEmployee.get('createPass');
  }
  get confirmPass(){
    return this.addEmployee.get('confirmPass');
  }
  onSubmit(){
    console.log(this.addEmployee.value.employeeID);
    console.log(this.addEmployee.value.employeeName);
    console.log(this.addEmployee.value.email);
    console.log(this.addEmployee.value.contact);
    console.log(this.addEmployee.value.department);
    console.log(this.addEmployee.value.userType);
    console.log(this.addEmployee.value.createPass);
    console.log(this.addEmployee.value.confirmPass);
  }

  ngOnInit(): void {}
}
