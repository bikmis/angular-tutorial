import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsMenuComponent } from './js-menu.component';

describe('JsMenuComponent', () => {
  let component: JsMenuComponent;
  let fixture: ComponentFixture<JsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
