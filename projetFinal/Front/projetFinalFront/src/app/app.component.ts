import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'projetFinalFront';

  menuGlobal: MenuItem[];

  constructor() {
    this.menuGlobal = [
      { label: 'Accueil', icon: 'fa fa-fw fa-bar-chart'},
      { label: 'Produit', icon: 'fa fa-fw fa-calendar' },
      { label: 'Panier', icon: 'fa fa-fw fa-book' }
    ];
  }
}

