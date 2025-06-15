import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { jwtDecode } from "jwt-decode";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;
  username: string | undefined;
  roles: string[] | undefined;
  accessToken: string | undefined;

  constructor(private http: HttpClient, private router: Router) { }

  public login(username: string, password: string): Observable<any> {
    let params = new HttpParams()
      .set('username', username)
      .set('password', password);

    let headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post("http://localhost:8085/auth/login", params.toString(), { headers: headers });
  }

  public loadProfile(data: any) {
    this.accessToken = data.access_token;
    this.isAuthenticated = true;
    this.saveTokenInLocalStorage();

    let decodedJwt: any = jwtDecode(this.accessToken!);
    this.username = decodedJwt.sub;
    this.roles = decodedJwt.scope.split(" "); 
    window.localStorage.setItem("jwtrole", this.accessToken || "");
  }

  public saveTokenInLocalStorage() {
    if (this.accessToken) {
      window.localStorage.setItem("jwtToken", this.accessToken);
    }
  }

  public loadJWTTokenFromLocalStorage() {
    let token = window.localStorage.getItem("jwtToken");
    if (token) {
      let data = { access_token: token };
      this.loadProfile(data);
      this.router.navigateByUrl("/admin/customers");
    }
  }

  public logout() {
    this.isAuthenticated = false;
    this.accessToken = undefined;
    this.username = undefined;
    this.roles = undefined;
    this.removeTokenFromLocalStorage();
    this.router.navigateByUrl("/login");
  }

  public removeTokenFromLocalStorage() {
    window.localStorage.removeItem("jwtToken");
    
  }
   public getAccessToken(): string | null {
    return this.accessToken || localStorage.getItem('jwtToken');
  }

  // Call this when the app initializes
  public initializeAuthState(): void {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const data = { access_token: token };
      this.loadProfile(data);
    }
  }
}