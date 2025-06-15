import { TestBed } from '@angular/core/testing';
import { AuthorizationGuard } from './authorization.guard';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

describe('AuthorizationGuard', () => {
  let mockAuthService: Partial<AuthService>;
  let mockRouter: Partial<Router>;
  let guard: AuthorizationGuard;

  beforeEach(() => {
    mockAuthService = { roles: ['ADMIN'] };
    mockRouter = { navigateByUrl: jasmine.createSpy('navigateByUrl') };
    guard = new AuthorizationGuard(mockAuthService as AuthService, mockRouter as Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
