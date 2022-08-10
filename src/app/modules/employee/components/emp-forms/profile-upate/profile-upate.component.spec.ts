import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUpateComponent } from './profile-upate.component';

describe('ProfileUpateComponent', () => {
  let component: ProfileUpateComponent;
  let fixture: ComponentFixture<ProfileUpateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUpateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileUpateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
