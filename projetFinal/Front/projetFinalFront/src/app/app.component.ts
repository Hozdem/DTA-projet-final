import { Component } from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetFinalFront';
  visiteur: MenuItem[];
  constructor(){
    this.visiteur = [
      {label: 'Acceuil', icon: 'fa fa-fw fa-bar-chart'},
      {label: 'Produit', icon: 'fa fa-fw fa-calendar'},
      {label: 'Mon profil', icon: 'fa fa-fw fa-book'},
      {label: 'Panier', icon: 'fa fa-fw fa-book'}
  ];
  }
}
