import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsShellComponent } from './js-shell.component';

describe('JsShellComponent', () => {
  let component: JsShellComponent;
  let fixture: ComponentFixture<JsShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
