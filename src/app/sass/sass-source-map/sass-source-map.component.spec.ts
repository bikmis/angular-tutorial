import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SassSourceMapComponent } from './sass-source-map.component';

describe('SassSourceMapComponent', () => {
  let component: SassSourceMapComponent;
  let fixture: ComponentFixture<SassSourceMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SassSourceMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SassSourceMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
