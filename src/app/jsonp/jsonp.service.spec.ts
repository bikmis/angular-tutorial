import { TestBed } from '@angular/core/testing';

import { JsonpService } from './jsonp.service';

describe('JsonpService', () => {
  let service: JsonpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
