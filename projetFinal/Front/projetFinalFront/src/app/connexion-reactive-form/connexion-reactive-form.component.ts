import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConnexionService } from '../connexion.service';
import { MyUser } from '../my-user';
import { Router, Route } from '@angular/router';
import { UserService } from '../user.service';
import { state } from '@angular/animations';

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

  constructor(private router: Router, private fb: FormBuilder, private co: ConnexionService) { }

  ngOnInit() {
    
  }

  onSubmit(){
    let user = new MyUser(this.userForm.value.login , this.userForm.value.password, 'ROLE_USER', 'nom', 'prenom','email', 'adresse', 'ville', '12345');
    this.co.connexion(user).subscribe(b => {
      if(b !== null)
      {
        localStorage.setItem("loginVK", b.login  );
        localStorage.setItem("passwordVK", this.userForm.value.password );
        localStorage.setItem("roleVK", b.role);
        this.router.navigate(['/']);
      }else{
        this.router.navigate(['/connexion']);
      }
    });
  }
}
