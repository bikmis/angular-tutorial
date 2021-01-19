import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FragmentComponent } from './fragment.component';

describe('FragmentComponent', () => {
  let component: FragmentComponent;
  let fixture: ComponentFixture<FragmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FragmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
