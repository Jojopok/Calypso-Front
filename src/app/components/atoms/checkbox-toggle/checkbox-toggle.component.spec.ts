import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxToggleComponent } from './checkbox-toggle.component';

describe('CheckboxToggleComponent', () => {
  let component: CheckboxToggleComponent;
  let fixture: ComponentFixture<CheckboxToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxToggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckboxToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
