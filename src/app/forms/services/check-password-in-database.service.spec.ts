import { TestBed } from '@angular/core/testing';

import { CheckPasswordInDatabaseService } from './check-password-in-database.service';

describe('CheckPasswordInDatabaseService', () => {
  let service: CheckPasswordInDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckPasswordInDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
