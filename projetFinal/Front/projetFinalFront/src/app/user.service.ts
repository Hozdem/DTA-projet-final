import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MyUser } from './my-user';
import { FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8091/api/MyUsers';

  httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
    
  };
  constructor(private http: HttpClient, private router: Router) { }

  getAllUser(): Observable<MyUser[]>
  {
    return this.http.get<Array<MyUser>>(this.url +'/', this.httpOptions);
  }

  getUser(id: number): Observable<MyUser>
  {
    return this.http.get<MyUser>(this.url +'/' + id, this.httpOptions);
  }

  addUser(user: MyUser)
  { 
    this.http.post(this.url + '/addMyUser',user, this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }

  updateUser(user: MyUser)
  {
    this.http.put<MyUser>(this.url +'/updateMyUser/' ,user,  this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }
  
  updateListUser(users: Array<MyUser>)
  {
    this.http.put(this.url + '/updateListMyUser/' , users, this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }

  deleteUser(id: number)
  {
    this.http.delete<MyUser>(this.url +'/deleteMyUser/' + id,  this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }

  verifierLoginAndPassword(id: number, password: string): Observable<boolean>
  {
    return this.http.post<boolean>(this.url + '/connexionAuto/' + id,password,  this.httpOptions);
  }

  findUserIdByLogin(login: string): Observable<MyUser>
  {
    return this.http.get<MyUser>(this.url + "/findUser/" + login, this.httpOptions );
  }

  verifierPassword(passwordKey: string, passwordConfirmationKey: string)
  {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
          return passwordConfirmationInput.setErrors(null);
      }
    }
  }



  menu: MenuItem[];

  labelProduit = 'Les produits';
  urlProduit = '/';

  labelMonCompte = 'Mon compte';
  urlMonCompte = '/updateUser';

  labelDeconnexion = 'Déconnexion';
  urlDeconnexion = '/deconnexion';

  idUser: number;

  test(): Observable<Array<MenuItem>>{
    let visiteur = false;
    if (localStorage.getItem("loginVK") !== null && localStorage.getItem("passwordVK") !== null) {
      if (localStorage.getItem("roleVK") !== null) {
        // recuperer l'id pour la modification de luser et tester si il est connecte
        this.findUserIdByLogin(localStorage.getItem("loginVK")).subscribe(u => {
          if (u !== null) {
            // si on est un utilisateur ou un admin existant en bdd
            this.idUser = u.id;
            this.verifierLoginAndPassword(this.idUser, localStorage.getItem("passwordVK")).subscribe(b => {
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
                      { label: this.labelDeconnexion, url: this.urlDeconnexion}
                    ]
                  }
                ];
              }
              else if (localStorage.getItem("roleVK") === 'ROLE_ADMIN') {
                this.menu = [
                  {
                    label: 'ADMIN', items: [
                      { label: this.labelProduit, url: this.urlProduit },
                      { label: this.labelMonCompte, url: this.urlMonCompte },
                      { label: 'Administration', url: 'administration' },
                      { label: this.labelDeconnexion, url: this.urlDeconnexion}
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
    return of(this.menu);
  }
}
