import { TestBed } from '@angular/core/testing';

import { PlaceListingsService } from './place-listings.service';

describe('PlaceListingsService', () => {
  let service: PlaceListingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceListingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
