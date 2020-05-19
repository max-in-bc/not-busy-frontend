import { TestBed } from '@angular/core/testing';

import { LoginPage } from './login-page.resolver';

describe('LoginPage.ResolverService', () => {
  let service: LoginPage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginPage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
