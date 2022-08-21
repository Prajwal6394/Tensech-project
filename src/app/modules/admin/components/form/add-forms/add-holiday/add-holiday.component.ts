import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.component.html',
  styleUrls: ['./add-holiday.component.scss']
})
export class AddHolidayComponent implements OnInit {
  addHolidayForm = new FormGroup({
    date: new FormControl('', [Validators.required]),
    reason: new FormControl('', [Validators.required]),
  });

  constructor() { }
  
  get date(){
    return this.addHolidayForm.get('date');
  }
  get reason(){
    return this.addHolidayForm.get('reason');
  }
  onSubmit(){
    console.log(this.addHolidayForm.value.date);
    console.log(this.addHolidayForm.value.reason);
  }

  ngOnInit(): void {
  }


}
