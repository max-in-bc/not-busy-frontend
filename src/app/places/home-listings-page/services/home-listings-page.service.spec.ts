import { TestBed } from '@angular/core/testing';

import { HomeListingsPageService } from './home-listings-page.service';

describe('PlaceListingsService', () => {
  let service: HomeListingsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeListingsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
