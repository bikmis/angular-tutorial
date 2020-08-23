import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SassMenuComponent } from './sass-menu.component';

describe('SassMenuComponent', () => {
  let component: SassMenuComponent;
  let fixture: ComponentFixture<SassMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SassMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SassMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
