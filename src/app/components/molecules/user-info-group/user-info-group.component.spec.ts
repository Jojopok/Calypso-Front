import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoGroupComponent } from './user-info-group.component';

describe('UserInfoGroupComponent', () => {
  let component: UserInfoGroupComponent;
  let fixture: ComponentFixture<UserInfoGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInfoGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserInfoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
