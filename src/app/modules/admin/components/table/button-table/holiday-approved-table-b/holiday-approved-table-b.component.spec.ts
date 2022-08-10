import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayApprovedTableBComponent } from './holiday-approved-table-b.component';

describe('HolidayApprovedTableBComponent', () => {
  let component: HolidayApprovedTableBComponent;
  let fixture: ComponentFixture<HolidayApprovedTableBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayApprovedTableBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayApprovedTableBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
