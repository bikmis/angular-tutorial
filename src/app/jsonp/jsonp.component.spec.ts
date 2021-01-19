import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JsonpComponent } from './jsonp.component';

describe('JsonpComponent', () => {
  let component: JsonpComponent;
  let fixture: ComponentFixture<JsonpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
