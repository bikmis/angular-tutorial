import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SassListComponent } from './sass-list.component';

describe('SassListComponent', () => {
  let component: SassListComponent;
  let fixture: ComponentFixture<SassListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SassListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
