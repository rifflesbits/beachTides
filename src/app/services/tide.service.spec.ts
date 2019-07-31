import { TestBed } from '@angular/core/testing';

import { TideService } from './tide.service';

describe('TideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TideService = TestBed.get(TideService);
    expect(service).toBeTruthy();
  });
});
