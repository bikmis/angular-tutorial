import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpreadSyntaxComponent } from './spread-syntax.component';

describe('SpreadSyntaxComponent', () => {
  let component: SpreadSyntaxComponent;
  let fixture: ComponentFixture<SpreadSyntaxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadSyntaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
