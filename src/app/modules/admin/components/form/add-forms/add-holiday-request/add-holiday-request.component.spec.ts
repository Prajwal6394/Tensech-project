import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHolidayRequestComponent } from './add-holiday-request.component';

describe('AddHolidayRequestComponent', () => {
  let component: AddHolidayRequestComponent;
  let fixture: ComponentFixture<AddHolidayRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHolidayRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHolidayRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
