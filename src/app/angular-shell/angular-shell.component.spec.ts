import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularShellComponent } from './angular-shell.component';

describe('AngularShellComponent', () => {
  let component: AngularShellComponent;
  let fixture: ComponentFixture<AngularShellComponent>;

  beforeEach(async(() => {
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
