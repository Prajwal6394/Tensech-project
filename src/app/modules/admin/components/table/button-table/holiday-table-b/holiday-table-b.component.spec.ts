import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayTableBComponent } from './holiday-table-b.component';

describe('HolidayTableBComponent', () => {
  let component: HolidayTableBComponent;
  let fixture: ComponentFixture<HolidayTableBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayTableBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayTableBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
