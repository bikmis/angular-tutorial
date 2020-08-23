import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsFunctionComponent } from './js-function.component';

describe('JsFunctionComponent', () => {
  let component: JsFunctionComponent;
  let fixture: ComponentFixture<JsFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
