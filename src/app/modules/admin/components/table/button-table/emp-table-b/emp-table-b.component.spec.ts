import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTableBComponent } from './emp-table-b.component';

describe('EmpTableBComponent', () => {
  let component: EmpTableBComponent;
  let fixture: ComponentFixture<EmpTableBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpTableBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpTableBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
