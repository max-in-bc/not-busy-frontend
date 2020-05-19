import { TestBed } from '@angular/core/testing';

import { PlaceDetailService } from './place-detail.service';

describe('PlaceDetailService', () => {
  let service: PlaceDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
