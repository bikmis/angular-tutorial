import { TestBed } from '@angular/core/testing';

import { UsernameAsyncValidatorService } from './username-async-validator.service';

describe('UsernameAsyncValidatorService', () => {
  let service: UsernameAsyncValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsernameAsyncValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
