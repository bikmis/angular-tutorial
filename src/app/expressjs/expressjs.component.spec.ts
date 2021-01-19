import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExpressjsComponent } from './expressjs.component';

describe('ExpressjsComponent', () => {
  let component: ExpressjsComponent;
  let fixture: ComponentFixture<ExpressjsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
