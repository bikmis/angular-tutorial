import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JsVariableComponent } from './js-variable.component';

describe('JsVariableComponent', () => {
  let component: JsVariableComponent;
  let fixture: ComponentFixture<JsVariableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JsVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
