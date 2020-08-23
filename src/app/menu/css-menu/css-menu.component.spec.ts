import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssMenuComponent } from './css-menu.component';

describe('CssMenuComponent', () => {
  let component: CssMenuComponent;
  let fixture: ComponentFixture<CssMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
