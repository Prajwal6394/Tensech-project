import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  updateEmployee = new FormGroup({
    employeeID: new FormControl('', [Validators.required ,]),
    employeeName: new FormControl('', [Validators.required ,]),
    email: new FormControl('', [Validators.required ,]),
    contact: new FormControl('', [Validators.required ,]),
    department: new FormControl('', [Validators.required ,]),
    userType: new FormControl('', [Validators.required ,]),
    createPass: new FormControl('', [Validators.required ,]),
    confirmPass: new FormControl('', [Validators.required ,]),
  });

  constructor() { }

  get employeeID(){
    return this.updateEmployee.get('employeeID');
  }
  get employeeName(){
    return this.updateEmployee.get('employeeName');
  }

  get email(){
    return this.updateEmployee.get('email');
  }
  get contact(){
    return this.updateEmployee.get('contact');
  }
  get department(){
    return this.updateEmployee.get('department');
  }
  get userType(){
    return this.updateEmployee.get('userType');
  }
  get createPass(){
    return this.updateEmployee.get('createPass');
  }
  get confirmPass(){
    return this.updateEmployee.get('confirmPass');
  }
  onSubmit(){
    console.log(this.updateEmployee.value.employeeID);
    console.log(this.updateEmployee.value.employeeName);
    console.log(this.updateEmployee.value.email);
    console.log(this.updateEmployee.value.contact);
    console.log(this.updateEmployee.value.department);
    console.log(this.updateEmployee.value.userType);
    console.log(this.updateEmployee.value.createPass);
    console.log(this.updateEmployee.value.confirmPass);
  }

  ngOnInit(): void {
  }

}
