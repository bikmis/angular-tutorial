import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JsLocationComponent } from './js-location.component';

describe('JsLocationComponent', () => {
  let component: JsLocationComponent;
  let fixture: ComponentFixture<JsLocationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JsLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
