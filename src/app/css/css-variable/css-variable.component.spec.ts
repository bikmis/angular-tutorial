import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssVariableComponent } from './css-variable.component';

describe('CssVariableComponent', () => {
  let component: CssVariableComponent;
  let fixture: ComponentFixture<CssVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
