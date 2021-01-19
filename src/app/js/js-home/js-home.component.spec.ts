import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JsHomeComponent } from './js-home.component';

describe('JsHomeComponent', () => {
  let component: JsHomeComponent;
  let fixture: ComponentFixture<JsHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
