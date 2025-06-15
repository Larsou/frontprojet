import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router'; 
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service"; 

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate { 
  constructor(private authService: AuthService, private router: Router) { 
  }

  canActivate( 
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree { 

    let requiredRole = route.data['roles']; 

    if (this.authService.roles?.includes(requiredRole)) { 
      return true; 
    } else {
      this.router.navigateByUrl("/admin/notAuthorized");
      return false; 
    }
  }

}
