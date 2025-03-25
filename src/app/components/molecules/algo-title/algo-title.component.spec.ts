import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoTitleComponent } from './algo-title.component';

describe('AlgoTitleComponent', () => {
  let component: AlgoTitleComponent;
  let fixture: ComponentFixture<AlgoTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlgoTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
