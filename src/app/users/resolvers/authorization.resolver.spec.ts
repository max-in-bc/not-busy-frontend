import { TestBed } from '@angular/core/testing';

import { AuthorizationResolver } from './authorization.resolver';

describe('AuthorizationService', () => {
  let service: AuthorizationResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
