import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsJsonpComponent } from './js-jsonp.component';

describe('JsJsonpComponent', () => {
  let component: JsJsonpComponent;
  let fixture: ComponentFixture<JsJsonpComponent>;

  beforeEach(async(() => {
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
