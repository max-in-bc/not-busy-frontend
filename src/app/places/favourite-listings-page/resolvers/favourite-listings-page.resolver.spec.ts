import { TestBed } from '@angular/core/testing';

import { FavouriteListingsPageResolver } from './favourite-listings-page.resolver';

describe('FavouriteListingsPageResolverService', () => {
  let service: FavouriteListingsPageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteListingsPageResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
