import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { CommonModule } from '@angular/common'; // Utilisez CommonModule au lieu de BrowserModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true, // Indique que le composant est autonome
  imports: [
    CommonModule, // Remplacez BrowserModule par CommonModule
    ReactiveFormsModule // Ajout de ReactiveFormsModule pour les formulaires réactifs
  ],
})
export class LoginComponent {
  loginForm!: FormGroup; // Déclaration du formulaire

  constructor(private fb: FormBuilder, // Injection de FormBuilder
              private authService: AuthService, // Injection de AuthService
              private router: Router) { // Injection de Router
    // Initialisation du formulaire
    this.loginForm = this.fb.group({
      username: [''], 
      password: [''] 
    });
  }

  handleLogin() { // Méthode appelée à la soumission du formulaire
    let username = this.loginForm.value.username; // Récupérer username
    let password = this.loginForm.value.password; // Récupérer password

    // Appeler le service d'authentification
    this.authService.login(username, password).subscribe({
      next: (data) => { // Succès de l'authentification
        console.log(data); // Afficher la réponse (contient le token)
        this.authService.loadProfile(data); // Charger le profil de l'utilisateur
        this.router.navigateByUrl("/admin"); // Naviguer vers la page admin
      },
      error: (err) => { // Erreur d'authentification
        console.log(err); // Afficher l'erreur
      }
    });
  }
}