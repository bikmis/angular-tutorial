import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DummyTextComponent } from './dummy-text.component';

describe('DummyTextComponent', () => {
  let component: DummyTextComponent;
  let fixture: ComponentFixture<DummyTextComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
