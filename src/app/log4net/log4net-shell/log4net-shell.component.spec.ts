import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Log4netShellComponent } from './log4net-shell.component';

describe('Log4netShellComponent', () => {
  let component: Log4netShellComponent;
  let fixture: ComponentFixture<Log4netShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Log4netShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Log4netShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
