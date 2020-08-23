import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SassMixinComponent } from './sass-mixin.component';

describe('SassMixinComponent', () => {
  let component: SassMixinComponent;
  let fixture: ComponentFixture<SassMixinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SassMixinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SassMixinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
