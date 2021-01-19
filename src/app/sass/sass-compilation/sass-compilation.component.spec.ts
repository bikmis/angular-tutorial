import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SassCompilationComponent } from './sass-compilation.component';

describe('SassCompilationComponent', () => {
  let component: SassCompilationComponent;
  let fixture: ComponentFixture<SassCompilationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SassCompilationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SassCompilationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
