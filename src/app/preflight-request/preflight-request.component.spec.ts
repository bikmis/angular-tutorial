import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PreflightRequestComponent } from './preflight-request.component';

describe('PreflightRequestComponent', () => {
  let component: PreflightRequestComponent;
  let fixture: ComponentFixture<PreflightRequestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PreflightRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreflightRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
