import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JsShellComponent } from './js-shell.component';

describe('JsShellComponent', () => {
  let component: JsShellComponent;
  let fixture: ComponentFixture<JsShellComponent>;

  beforeEach(waitForAsync(() => {
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
