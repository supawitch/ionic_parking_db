import { TestBed } from '@angular/core/testing';

import { ParkingProviderService } from './parking-provider.service';

describe('ParkingProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParkingProviderService = TestBed.get(ParkingProviderService);
    expect(service).toBeTruthy();
  });
});
