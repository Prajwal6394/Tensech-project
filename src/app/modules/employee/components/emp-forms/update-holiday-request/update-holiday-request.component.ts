import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-holiday-request',
  templateUrl: './update-holiday-request.component.html',
  styleUrls: ['./update-holiday-request.component.scss']
})
export class UpdateHolidayRequestComponent implements OnInit {
updateHolidayRequestForm = new FormGroup({
    employeeID: new FormControl('', [Validators.required]),
    employeeName: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    reason: new FormControl('', [Validators.required]),
    decison: new FormControl('', [Validators.required]),
  });

  constructor() { }
  ngOnInit(): void {
  }

  get employeeID(){
    return this.updateHolidayRequestForm.get('employeeID');
  }
  get employeeName(){
    return this.updateHolidayRequestForm.get('employeeName');
  }
  get department(){
    return this.updateHolidayRequestForm.get('department');
  }
  get date(){
    return this.updateHolidayRequestForm.get('date');
  }
  get reason(){
    return this.updateHolidayRequestForm.get('reason');
  }
  get decison(){
    return this.updateHolidayRequestForm.get('decison');
  }

  onSubmit(){
    console.log(this.updateHolidayRequestForm.value.employeeID);
    console.log(this.updateHolidayRequestForm.value.employeeName);
    console.log(this.updateHolidayRequestForm.value.department);
    console.log(this.updateHolidayRequestForm.value.date);
    console.log(this.updateHolidayRequestForm.value.reason);
    console.log(this.updateHolidayRequestForm.value.decison);
    
  }
}
