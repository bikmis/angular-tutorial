import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Log4netMenuComponent } from './log4net-menu.component';

describe('Log4netMenuComponent', () => {
  let component: Log4netMenuComponent;
  let fixture: ComponentFixture<Log4netMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Log4netMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Log4netMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
