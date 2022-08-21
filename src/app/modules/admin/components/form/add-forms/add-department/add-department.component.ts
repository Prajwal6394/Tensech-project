import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {

  addDepartmentForm = new FormGroup({
    departmentID: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
    departmentName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
  })

  constructor() { }

  ngOnInit(): void {
  }

  get departmentID(){
    return this.addDepartmentForm.get('departmentID');
  }

  get departmentName(){
    return this.addDepartmentForm.get('departmentName');
  }

  onSubmit(){
   console.log(this.addDepartmentForm.value.departmentID);
   console.log(this.addDepartmentForm.value.departmentName);
  }

}
