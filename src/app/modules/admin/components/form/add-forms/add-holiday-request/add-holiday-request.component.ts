import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-holiday-request',
  templateUrl: './add-holiday-request.component.html',
  styleUrls: ['./add-holiday-request.component.scss']
})
export class AddHolidayRequestComponent implements OnInit {

  addHolidayRequestForm = new FormGroup({
    employeeID: new FormControl('', [Validators.required]),
    employeeName: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    reason: new FormControl('', [Validators.required]),
    decison: new FormControl('', [Validators.required]),
  });

  constructor() { }

  get employeeID(){
    return this.addHolidayRequestForm.get('employeeID');
  }
  get employeeName(){
    return this.addHolidayRequestForm.get('employeeName');
  }
  get department(){
    return this.addHolidayRequestForm.get('department');
  }
  get date(){
    return this.addHolidayRequestForm.get('date');
  }
  get reason(){
    return this.addHolidayRequestForm.get('reason');
  }
  get decison(){
    return this.addHolidayRequestForm.get('decison');
  }

  onSubmit(){
    console.log(this.addHolidayRequestForm.value.employeeID);
    console.log(this.addHolidayRequestForm.value.employeeName);
    console.log(this.addHolidayRequestForm.value.department);
    console.log(this.addHolidayRequestForm.value.date);
    console.log(this.addHolidayRequestForm.value.reason);
    console.log(this.addHolidayRequestForm.value.decison);
    
  }

  ngOnInit(): void {
  }

}
