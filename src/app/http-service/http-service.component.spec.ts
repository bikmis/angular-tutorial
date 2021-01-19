import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HttpServiceComponent } from './http-service.component';

describe('HttpServiceComponent', () => {
  let component: HttpServiceComponent;
  let fixture: ComponentFixture<HttpServiceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
