import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SassShellComponent } from './sass-shell.component';

describe('SassShellComponent', () => {
  let component: SassShellComponent;
  let fixture: ComponentFixture<SassShellComponent>;

  beforeEach(async(() => {
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
