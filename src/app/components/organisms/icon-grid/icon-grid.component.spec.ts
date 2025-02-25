import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconGridComponent } from './icon-grid.component';

describe('IconGridComponent', () => {
  let component: IconGridComponent;
  let fixture: ComponentFixture<IconGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
