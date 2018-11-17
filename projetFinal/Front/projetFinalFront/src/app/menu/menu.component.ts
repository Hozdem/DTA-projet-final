import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuGlobal: MenuItem[];
  constructor() { 
    this.menuGlobal = [
      { label: 'Accueil', icon: 'fa fa-fw fa-bar-chart'},
      { label: 'Produit', icon: 'fa fa-fw fa-calendar' },
      { label: 'Panier', icon: 'fa fa-fw fa-book' }
    ];}

  ngOnInit() {
  }

}
