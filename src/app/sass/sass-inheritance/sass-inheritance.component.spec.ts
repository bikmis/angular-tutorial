import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SassInheritanceComponent } from './sass-inheritance.component';

describe('SassInheritanceComponent', () => {
  let component: SassInheritanceComponent;
  let fixture: ComponentFixture<SassInheritanceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SassInheritanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SassInheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
