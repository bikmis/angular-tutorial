import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SassInstallationComponent } from './sass-installation.component';

describe('SassInstallationComponent', () => {
  let component: SassInstallationComponent;
  let fixture: ComponentFixture<SassInstallationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SassInstallationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SassInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
