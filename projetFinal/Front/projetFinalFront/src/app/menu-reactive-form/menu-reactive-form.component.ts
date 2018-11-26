import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UserService } from '../user.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { MyUser } from '../my-user';
import { LoginService } from '../login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-reactive-form',
  templateUrl: './menu-reactive-form.component.html',
  styleUrls: ['./menu-reactive-form.component.css']
})
export class MenuReactiveFormComponent implements OnInit {



  menu: MenuItem[];
  idUser: number;

  labelProduit: string = 'Produit';
  labelMonCompte: string = 'Mon compte';
  labelDeconnexion: string = 'Déconnexion';

  urlProduit: string = '/produit';
  urlMonCompte: string = '/updateUser';
  urlDeconnexion: string = '/deconnexion';

  constructor(private serviceUser: UserService, private loginService: LoginService) { }

  ngOnInit() {
    this.initMenu();
    this.loginService.getLogInEvent().subscribe(() => this.initMenu());
  }
  
  initMenu() {
    let visiteur = false;
      if (localStorage.getItem("loginVK") !== null && localStorage.getItem("passwordVK") !== null) {
        if (localStorage.getItem("roleVK") !== null) {
          // recuperer l'id pour la modification de luser et tester si il est connecte
          this.serviceUser.findUserIdByLogin(localStorage.getItem("loginVK")).subscribe(u => {
            if (u !== null) {
              // si on est un utilisateur ou un admin existant en bdd
              this.idUser = u.id;
              this.serviceUser.verifierLoginAndPassword(this.idUser, localStorage.getItem("passwordVK")).subscribe(b => {
                if (b === true) {
                  // si le mot de passe et login sont correct
                  this.urlMonCompte += '/' + this.idUser;
                }
  
                if (localStorage.getItem("roleVK") === 'ROLE_USER') {
                  this.menu = [
                    {
                      label: 'UTILISATEUR', items: [
                        { label: this.labelProduit, url: this.urlProduit },
                        { label: this.labelMonCompte, url: this.urlMonCompte },
                        { label: this.labelDeconnexion, url: this.urlDeconnexion }
                      ]
                    }
                  ];
                }
                else if (localStorage.getItem("roleVK") === 'ROLE_ADMIN') {
                  this.menu = [
                    {
                      label: 'ADMIN', items: [
                        { label: this.labelProduit, routerLink: this.urlProduit },
                        { label: this.labelMonCompte, routerLink: this.urlMonCompte },
                        { label: 'Administration', routerLink: 'administration' },
                        { label: this.labelDeconnexion, routerLink: this.urlDeconnexion/*, command:() => { this.disconnect(); this.initMenu() }*/ }
                      ]
                    }
                  ];
                }
              });
            }
          });
        }
      }
      else {
        visiteur = true;
      }
  
      if (visiteur) {
        this.menu = [
          { label: 'Mon profil', items: [{ label: this.labelProduit, url: this.urlProduit }, { label: 'Inscription', url: '/addUser' }, { label: 'Connexion', url: '/connexion' }] }
        ];
      }
  }

  disconnect() {
    localStorage.removeItem("loginVK");
  }
}
