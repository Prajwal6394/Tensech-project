import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentTableBComponent } from './department-table-b.component';

describe('DepartmentTableBComponent', () => {
  let component: DepartmentTableBComponent;
  let fixture: ComponentFixture<DepartmentTableBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentTableBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentTableBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
