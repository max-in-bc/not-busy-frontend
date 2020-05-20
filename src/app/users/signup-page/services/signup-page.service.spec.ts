import { TestBed } from '@angular/core/testing';

import { SignupPageService } from './signup-page.service';

describe('SignupPageService', () => {
  let service: SignupPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
