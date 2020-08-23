import { TestBed } from '@angular/core/testing';

import { HeroEditGuard } from './hero-edit.guard';

describe('HeroEditGuard', () => {
  let guard: HeroEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HeroEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
