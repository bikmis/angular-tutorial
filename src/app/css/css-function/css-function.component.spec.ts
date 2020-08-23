import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssFunctionComponent } from './css-function.component';

describe('CssFunctionComponent', () => {
  let component: CssFunctionComponent;
  let fixture: ComponentFixture<CssFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
