import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JsJsonpComponent } from './js-jsonp.component';

describe('JsJsonpComponent', () => {
  let component: JsJsonpComponent;
  let fixture: ComponentFixture<JsJsonpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JsJsonpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsJsonpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
