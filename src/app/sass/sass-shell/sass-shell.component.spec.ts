import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SassShellComponent } from './sass-shell.component';

describe('SassShellComponent', () => {
  let component: SassShellComponent;
  let fixture: ComponentFixture<SassShellComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SassShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SassShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
