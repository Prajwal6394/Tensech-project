import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.scss']
})
export class UpdateDepartmentComponent implements OnInit {
  updateDepartmentForm = new FormGroup({
    departmentID: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
    departmentName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
  })

  constructor() { }
  get departmentID(){
    return this.updateDepartmentForm.get('departmentID');
  }
  get departmentName(){
    return this.updateDepartmentForm.get('departmentName');
  }

  onSubmit(){
    console.log(this.updateDepartmentForm.value.departmentID);
    console.log(this.updateDepartmentForm.value.departmentName);
  }

  ngOnInit(): void {
  }

}
