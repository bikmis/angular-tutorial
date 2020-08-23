import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmCommandComponent } from './npm-command.component';

describe('NpmCommandComponent', () => {
  let component: NpmCommandComponent;
  let fixture: ComponentFixture<NpmCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
