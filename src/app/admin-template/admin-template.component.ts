import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { NavbarComponent } from '../navbar/navbar.component'; // Assuming you have a NavbarComponent

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css'],
  standalone: true, // Standalone component
  imports: [
    CommonModule, // For common Angular directives like *ngIf and *ngFor
    RouterModule, // Import RouterModule for <router-outlet>
    NavbarComponent // Import NavbarComponent
  ]
})
export class AdminTemplateComponent {}