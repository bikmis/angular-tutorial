import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AngularShellComponent } from './angular-shell.component';

describe('AngularShellComponent', () => {
  let component: AngularShellComponent;
  let fixture: ComponentFixture<AngularShellComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
