import { TestBed } from '@angular/core/testing';

import { BaseAPIService } from './base-api.service';

describe('BaseAPIService', () => {
  let service: BaseAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
