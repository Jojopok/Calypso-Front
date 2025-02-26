import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoGridComponent } from './algo-grid.component';

describe('AlgoGridComponent', () => {
  let component: AlgoGridComponent;
  let fixture: ComponentFixture<AlgoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlgoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
