import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PerformanceOptimizationComponent } from './performance-optimization.component';

describe('PerformanceOptimizationComponent', () => {
  let component: PerformanceOptimizationComponent;
  let fixture: ComponentFixture<PerformanceOptimizationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceOptimizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
