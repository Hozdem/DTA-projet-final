import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-reactive-form',
  templateUrl: './menu-reactive-form.component.html',
  styleUrls: ['./menu-reactive-form.component.css']
})
export class MenuReactiveFormComponent implements OnInit {

  menu: MenuItem[];

  labelProduit = 'Les produits';
  urlProduit = '/';

  labelDeconnexion = 'Deconnexion';
  urlDeconnexion = '/deconnexion';

  constructor() { }
 
  ngOnInit() {
    let visiteur = false;
    if(localStorage.getItem("loginVK") !==null)
    {
      if(localStorage.getItem("passwordVK") !==null)
      {
        if(localStorage.getItem("roleVK") ==='ROLE_USER')
        {
          this.menu = [
            { label: 'UTILISATEUR', items: [{ label: this.labelProduit, url: this.urlProduit }, { label: this.labelDeconnexion , url: this.urlDeconnexion }] }
          ];
        }
        else if(localStorage.getItem("roleVK") ==='ROLE_ADMIN')
        {
          this.menu = [
            { label: 'ADMIN', items: [{ label: this.labelProduit, url: this.urlProduit }, {label: 'Administrations', url: 'administration' }, { label: this.labelDeconnexion , url: this.urlDeconnexion  }] }
          ];
        }
        else
        {
          visiteur = true;
        }
      }
      else
      {
        visiteur = true;
      }
    }
    else
    {
      visiteur = true;
    }

    if (visiteur) {
      this.menu = [
        { label: 'Mon profil', items: [{ label: this.labelProduit, url: this.urlProduit }, { label: 'Inscription', url: '/addUser' }, { label: 'Connexion', url: '/connexion' }] }
      ];
    }
  }
}
