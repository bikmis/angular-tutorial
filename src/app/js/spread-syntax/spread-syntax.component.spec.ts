import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadSyntaxComponent } from './spread-syntax.component';

describe('SpreadSyntaxComponent', () => {
  let component: SpreadSyntaxComponent;
  let fixture: ComponentFixture<SpreadSyntaxComponent>;

  beforeEach(async(() => {
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
