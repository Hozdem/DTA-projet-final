import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetFinalFront';
  
  visiteur: MenuItem[];
  utilisateur: MenuItem[];
  administrateur: MenuItem[];
  profil: MenuItem[];

  constructor() {
    this.profil = [
      { label: 'Accueil', icon: 'fa fa-fw fa-bar-chart'},
      { label: 'Produit', icon: 'fa fa-fw fa-calendar' },
      { label: 'Panier', icon: 'fa fa-fw fa-book' }
    ];

    this.visiteur = [
      { label: 'Mon profil', icon: 'fa fa-fw fa-book' , items: [{ label: 'Les produits', url: '/'},{ label: 'Inscription', url: '/addUser' },{ label: 'Connexion'}]}
    ];

    this.utilisateur = [
      { label: 'Mon profil', icon: 'fa fa-fw fa-book' , items: [{ label: 'Les produits'},{ label: 'Inscription'},{ label: 'Connexion'}]}
    ];

    this.administrateur = [
      { label: 'Mon profil', icon: 'fa fa-fw fa-book' , items: [{ label: 'Les produits'},{ label: 'Inscription'},{ label: 'Connexion'}]}
    ];
  }
}

