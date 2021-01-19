import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BuildDeploymentComponent } from './build-deployment.component';

describe('BuildDeploymentComponent', () => {
  let component: BuildDeploymentComponent;
  let fixture: ComponentFixture<BuildDeploymentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildDeploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildDeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
