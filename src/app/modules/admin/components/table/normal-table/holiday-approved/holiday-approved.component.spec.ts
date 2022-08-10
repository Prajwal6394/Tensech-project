import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayApprovedComponent } from './holiday-approved.component';

describe('HolidayApprovedComponent', () => {
  let component: HolidayApprovedComponent;
  let fixture: ComponentFixture<HolidayApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayApprovedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
