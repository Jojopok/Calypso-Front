import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAlgoPageComponent } from './new-algo-page.component';

describe('NewAlgoPageComponent', () => {
  let component: NewAlgoPageComponent;
  let fixture: ComponentFixture<NewAlgoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAlgoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewAlgoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
