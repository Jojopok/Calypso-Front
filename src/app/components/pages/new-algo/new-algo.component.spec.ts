import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAlgoComponent } from './new-algo.component';

describe('NewAlgoComponent', () => {
  let component: NewAlgoComponent;
  let fixture: ComponentFixture<NewAlgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAlgoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
