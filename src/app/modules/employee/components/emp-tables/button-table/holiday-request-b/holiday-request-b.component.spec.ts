import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayRequestBComponent } from './holiday-request-b.component';

describe('HolidayRequestBComponent', () => {
  let component: HolidayRequestBComponent;
  let fixture: ComponentFixture<HolidayRequestBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayRequestBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayRequestBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
