import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CssShellComponent } from './css-shell.component';

describe('CssShellComponent', () => {
  let component: CssShellComponent;
  let fixture: ComponentFixture<CssShellComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CssShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
