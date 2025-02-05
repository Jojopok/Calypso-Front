import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIconGridComponent } from './admin-icon-grid.component';

describe('AdminIconGridComponent', () => {
  let component: AdminIconGridComponent;
  let fixture: ComponentFixture<AdminIconGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminIconGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminIconGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
