import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConnexionService } from '../connexion.service';
import { MyUser } from '../my-user';
import { Router, Route } from '@angular/router';
import { UserService } from '../user.service';
import { state } from '@angular/animations';
import { Observable } from 'rxjs';
import { Promise } from 'q';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-connection-reactive-form',
  templateUrl: './connexion-reactive-form.component.html',
  styleUrls: ['./connexion-reactive-form.component.css']
})
export class ConnexionReactiveFormComponent implements OnInit {

  userForm = this.fb.group({
    login: [''],
    password: [''],
    role: ['']
  });

  constructor(private router: Router, private fb: FormBuilder, private co: ConnexionService, private loginService: LoginService) { }

  ngOnInit() {

  }

  onSubmit() {
    let user = new MyUser(this.userForm.value.login, this.userForm.value.password, 'ROLE_USER', 'nom', 'prenom', 'email', 'adresse', 'ville', '12345');
    this.co.connexion(user).subscribe(b => {
      if (b !== null) {
        this.loginService.login(b.login, b.password, b.role);
        this.router.navigate(['/']);        
      } else {
        this.router.navigate(['/connexion']);
      }
    });
  }
}
