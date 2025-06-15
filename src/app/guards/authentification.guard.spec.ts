import { TestBed } from '@angular/core/testing';
import { AuthenticationGuard } from './authentification.guard';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

describe('AuthenticationGuard', () => {
  let mockAuthService: Partial<AuthService>;
  let mockRouter: Partial<Router>;
  let guard: AuthenticationGuard;

  beforeEach(() => {
    mockAuthService = { isAuthenticated: true, roles: ['ADMIN'] };
    mockRouter = { navigateByUrl: jasmine.createSpy('navigateByUrl') };
    guard = new AuthenticationGuard(mockAuthService as AuthService, mockRouter as Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
