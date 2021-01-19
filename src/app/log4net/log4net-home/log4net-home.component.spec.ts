import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Log4netHomeComponent } from './log4net-home.component';

describe('Log4netHomeComponent', () => {
  let component: Log4netHomeComponent;
  let fixture: ComponentFixture<Log4netHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Log4netHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Log4netHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
