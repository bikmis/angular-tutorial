import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CssFunctionComponent } from './css-function.component';

describe('CssFunctionComponent', () => {
  let component: CssFunctionComponent;
  let fixture: ComponentFixture<CssFunctionComponent>;

  beforeEach(waitForAsync(() => {
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
