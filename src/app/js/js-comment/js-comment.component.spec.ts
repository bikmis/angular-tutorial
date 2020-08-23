import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsCommentComponent } from './js-comment.component';

describe('JsCommentComponent', () => {
  let component: JsCommentComponent;
  let fixture: ComponentFixture<JsCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
