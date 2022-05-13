import { TestBed } from '@angular/core/testing';

import { LoginServiceGuard } from './login-service.guard';

describe('LoginServiceGuard', () => {
  let guard: LoginServiceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginServiceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
