import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JsDataTypeComponent } from './js-data-type.component';

describe('JsDataTypeComponent', () => {
  let component: JsDataTypeComponent;
  let fixture: ComponentFixture<JsDataTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JsDataTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsDataTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
