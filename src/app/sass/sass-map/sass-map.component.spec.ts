import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SassMapComponent } from './sass-map.component';

describe('SassMapComponent', () => {
  let component: SassMapComponent;
  let fixture: ComponentFixture<SassMapComponent>;

  beforeEach(waitForAsync(() => {
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
