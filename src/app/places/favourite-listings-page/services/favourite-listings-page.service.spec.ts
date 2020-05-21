import { TestBed } from '@angular/core/testing';

import { FavouriteListingsPageService } from './favourite-listings-page.service';

describe('FavouriteListingsPageService', () => {
  let service: FavouriteListingsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteListingsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
