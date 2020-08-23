import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SassFunctionComponent } from './sass-function.component';

describe('SassFunctionComponent', () => {
  let component: SassFunctionComponent;
  let fixture: ComponentFixture<SassFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SassFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SassFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
