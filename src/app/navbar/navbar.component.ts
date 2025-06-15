import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true, // Mark the component as standalone
  imports: [
    RouterLink,
    CommonModule 
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  handleLogout(): void { // Ensure this method is properly defined
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
}