import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SassNestingComponent } from './sass-nesting.component';

describe('SassNestingComponent', () => {
  let component: SassNestingComponent;
  let fixture: ComponentFixture<SassNestingComponent>;

  beforeEach(async(() => {
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
