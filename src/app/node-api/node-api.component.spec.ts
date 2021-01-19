import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NodeApiComponent } from './node-api.component';

describe('NodeApiComponent', () => {
  let component: NodeApiComponent;
  let fixture: ComponentFixture<NodeApiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
