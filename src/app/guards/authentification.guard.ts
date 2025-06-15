import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router'; // Importer Router [35]
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service"; // Injecter AuthService [21]

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // First check if authenticated
    if (!this.authService.isAuthenticated) {
      this.router.navigateByUrl("/login");
      return false;
    }
    
    // Then check for admin role if needed
    if (route.data['roles'] && !this.authService.roles?.some(role => route.data['roles'].includes(role))) {
      this.router.navigateByUrl("/admin/notAuthorized");
      return false;
    }
    
    return true;
  }
}
