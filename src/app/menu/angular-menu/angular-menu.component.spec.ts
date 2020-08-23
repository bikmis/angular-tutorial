import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMenuComponent } from './angular-menu.component';

describe('AngularMenuComponent', () => {
  let component: AngularMenuComponent;
  let fixture: ComponentFixture<AngularMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
