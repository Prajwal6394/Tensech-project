import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHolidayRequestComponent } from './update-holiday-request.component';

describe('UpdateHolidayRequestComponent', () => {
  let component: UpdateHolidayRequestComponent;
  let fixture: ComponentFixture<UpdateHolidayRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHolidayRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateHolidayRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
