import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayRequestTableBComponent } from './holiday-request-table-b.component';

describe('HolidayRequestTableBComponent', () => {
  let component: HolidayRequestTableBComponent;
  let fixture: ComponentFixture<HolidayRequestTableBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayRequestTableBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayRequestTableBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
