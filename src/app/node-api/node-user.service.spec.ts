import { TestBed } from '@angular/core/testing';

import { NodeUserService } from './node-user.service';

describe('NodeUserService', () => {
  let service: NodeUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
