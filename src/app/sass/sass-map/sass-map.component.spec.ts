import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SassMapComponent } from './sass-map.component';

describe('SassMapComponent', () => {
  let component: SassMapComponent;
  let fixture: ComponentFixture<SassMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SassMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SassMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
