import { TestBed } from '@angular/core/testing';

import { SentinelService } from './sentinel.service';

describe('SentinelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SentinelService = TestBed.get(SentinelService);
    expect(service).toBeTruthy();
  });
});
 