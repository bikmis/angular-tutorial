import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TypeScriptComponent } from './type-script.component';

describe('TypeScriptComponent', () => {
  let component: TypeScriptComponent;
  let fixture: ComponentFixture<TypeScriptComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeScriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
