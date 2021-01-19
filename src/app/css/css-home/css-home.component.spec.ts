import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CssHomeComponent } from './css-home.component';

describe('CssHomeComponent', () => {
  let component: CssHomeComponent;
  let fixture: ComponentFixture<CssHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CssHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
