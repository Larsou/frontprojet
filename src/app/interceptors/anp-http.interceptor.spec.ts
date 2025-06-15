import { TestBed } from '@angular/core/testing';
import { AppHttpInterceptor } from './anp-http.interceptor';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

describe('AppHttpInterceptor', () => {
  let mockAuthService: Partial<AuthService>;
  let mockRouter: Partial<Router>;
  let interceptor: AppHttpInterceptor;

  beforeEach(() => {
    mockAuthService = { accessToken: 'test-token', logout: jasmine.createSpy('logout') };
    mockRouter = { navigateByUrl: jasmine.createSpy('navigateByUrl') };
    interceptor = new AppHttpInterceptor(mockAuthService as AuthService, mockRouter as Router);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
