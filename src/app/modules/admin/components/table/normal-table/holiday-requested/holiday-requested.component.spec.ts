import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayRequestedComponent } from './holiday-requested.component';

describe('HolidayRequestedComponent', () => {
  let component: HolidayRequestedComponent;
  let fixture: ComponentFixture<HolidayRequestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayRequestedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayRequestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
