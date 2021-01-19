import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Html5ValidationComponent } from './html5-validation.component';

describe('Html5ValidationComponent', () => {
  let component: Html5ValidationComponent;
  let fixture: ComponentFixture<Html5ValidationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Html5ValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Html5ValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
