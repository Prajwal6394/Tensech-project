import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-holiday',
  templateUrl: './update-holiday.component.html',
  styleUrls: ['./update-holiday.component.scss']
})
export class UpdateHolidayComponent implements OnInit {
  updateHolidayForm = new FormGroup({
    date: new FormControl('', [Validators.required]),
    reason: new FormControl('', [Validators.required]),
  });

  constructor() { }

  get date(){
    return this.updateHolidayForm.get('date');
  }
  get reason(){
    return this.updateHolidayForm.get('reason');
  }
  onSubmit(){
    console.log(this.updateHolidayForm.value.date);
    console.log(this.updateHolidayForm.value.reason);
  }

  ngOnInit(): void {
  }

}
