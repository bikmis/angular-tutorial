import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsWindowComponent } from './js-window.component';

describe('JsWindowComponent', () => {
  let component: JsWindowComponent;
  let fixture: ComponentFixture<JsWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
