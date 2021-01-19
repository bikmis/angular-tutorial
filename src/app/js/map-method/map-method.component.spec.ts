import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MapMethodComponent } from './map-method.component';

describe('MapMethodComponent', () => {
  let component: MapMethodComponent;
  let fixture: ComponentFixture<MapMethodComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MapMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
