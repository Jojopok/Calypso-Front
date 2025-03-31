import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoShowComponent } from './algo-show.component';

describe('AlgoShowComponent', () => {
  let component: AlgoShowComponent;
  let fixture: ComponentFixture<AlgoShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlgoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
