import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SassModuleComponent } from './sass-module.component';

describe('SassModuleComponent', () => {
  let component: SassModuleComponent;
  let fixture: ComponentFixture<SassModuleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SassModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SassModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
