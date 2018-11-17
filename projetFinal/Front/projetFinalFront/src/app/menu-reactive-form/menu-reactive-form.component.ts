import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-reactive-form',
  templateUrl: './menu-reactive-form.component.html',
  styleUrls: ['./menu-reactive-form.component.css']
})
export class MenuReactiveFormComponent implements OnInit {

  menu: MenuItem[];

<<<<<<< HEAD
  constructor() {}

=======
  constructor() { }
 
>>>>>>> fe9b7fd5cbef94718325dee6a861cb18230fc66e
  ngOnInit() {
    if (localStorage.getItem("loginVK") !==null && localStorage.getItem("passwordVK") !==null && localStorage.getItem("roleVK") ==='ROLE_USER') {
      this.menu = [
        { label: 'UTILISATEUR', icon: 'fa fa-fw fa-book', items: [{ label: 'Les produits' }, { label: 'Deconnexion' , url: '/deconnexion' }] }
      ];
    } else if (localStorage.getItem("loginVK") !==null && localStorage.getItem("passwordVK") !==null && localStorage.getItem("roleVK") ==='ROLE_ADMIN') {
      this.menu = [
        { label: 'ADMIN', icon: 'fa fa-fw fa-book', items: [{ label: 'Les produits' }, { label: 'Deconnexion', url: '/deconnexion'  }] }
      ];
    } else {
      this.menu = [
        { label: 'Mon profil', icon: 'fa fa-fw fa-book', items: [{ label: 'Les produits', url: '/' }, { label: 'Inscription', url: '/addUser' }, { label: 'Connexion', url: '/connexion' }] }
      ];
    }
  }
}
