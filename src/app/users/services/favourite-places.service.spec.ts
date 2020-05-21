import { TestBed } from '@angular/core/testing';

import { FavouritePlacesService } from './favourite-places.service';

describe('FavouritePlacesService', () => {
  let service: FavouritePlacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouritePlacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
