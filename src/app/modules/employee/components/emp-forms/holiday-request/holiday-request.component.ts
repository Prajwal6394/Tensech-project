import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-holiday-request',
  templateUrl: './holiday-request.component.html',
  styleUrls: ['./holiday-request.component.scss']
})
export class HolidayRequestComponent implements OnInit {

  holidayRequestForm = new FormGroup({
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
    return this.holidayRequestForm.get('employeeID');
  }
  get employeeName(){
    return this.holidayRequestForm.get('employeeName');
  }
  get department(){
    return this.holidayRequestForm.get('department');
  }
  get date(){
    return this.holidayRequestForm.get('date');
  }
  get reason(){
    return this.holidayRequestForm.get('reason');
  }
  get decison(){
    return this.holidayRequestForm.get('decison');
  }

  onSubmit(){
    console.log(this.holidayRequestForm.value.employeeID);
    console.log(this.holidayRequestForm.value.employeeName);
    console.log(this.holidayRequestForm.value.department);
    console.log(this.holidayRequestForm.value.date);
    console.log(this.holidayRequestForm.value.reason);
    console.log(this.holidayRequestForm.value.decison);
    
  }

}
