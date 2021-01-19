import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SassNestingComponent } from './sass-nesting.component';

describe('SassNestingComponent', () => {
  let component: SassNestingComponent;
  let fixture: ComponentFixture<SassNestingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SassNestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SassNestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
