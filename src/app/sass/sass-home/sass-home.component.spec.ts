import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SassHomeComponent } from './sass-home.component';

describe('SassHomeComponent', () => {
  let component: SassHomeComponent;
  let fixture: ComponentFixture<SassHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SassHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SassHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
