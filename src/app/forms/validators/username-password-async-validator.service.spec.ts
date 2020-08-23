import { TestBed } from '@angular/core/testing';

import { UsernamePasswordAsyncValidatorService } from './username-password-async-validator.service';

describe('UsernamePasswordAsyncValidatorService', () => {
  let service: UsernamePasswordAsyncValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsernamePasswordAsyncValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
