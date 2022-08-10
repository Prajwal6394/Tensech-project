import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayRequestTableComponent } from './holiday-request-table.component';

describe('HolidayRequestTableComponent', () => {
  let component: HolidayRequestTableComponent;
  let fixture: ComponentFixture<HolidayRequestTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayRequestTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
