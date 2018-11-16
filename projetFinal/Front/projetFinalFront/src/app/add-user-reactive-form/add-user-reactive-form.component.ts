import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MyUser } from '../my-user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user-reactive-form',
  templateUrl: './add-user-reactive-form.component.html',
  styleUrls: ['./add-user-reactive-form.component.css']
})
export class AddUserReactiveFormComponent implements OnInit {

  userForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
    verificationPassword: [''],
		nom: ['', Validators.required],
		prenom: ['', Validators.required],
		email: ['', [Validators.required, Validators.email]],
		adresse: ['', Validators.required],
		ville: ['', Validators.required],
		codePostal: ['', Validators.compose([Validators.minLength(5),Validators.maxLength(5), Validators.required])],
		numTel: ['', Validators.maxLength(10)]
  }, {validator: this.verifierPassword('password', 'verificationPassword')});
  
  
  add: boolean = false;
  id: number;
  
  // le num de tel doit avoir une taill 10 fixe
  // le code postal doit avoir une taille 5

  constructor(private fb: FormBuilder, private serviceUser: UserService, private activatedRoute: ActivatedRoute) { 
    this.userForm.setValue({
      login: 'test',
      password: '1234',
      verificationPassword: '1234',
      nom: 'test',
      prenom: 'test',
      email: 'email@email',
      adresse: 'zegzg',
      ville: 'zegzg',
      codePostal: '', 
      numTel: '0000000000'
    }) ;
  }
  
  ngOnInit() {
    
  }
  
  onSubmit()
  {
    let leRole = "ROLE_USER";
    let user = new MyUser(this.userForm.value.login, this.userForm.value.password, leRole, this.userForm.value.nom
      , this.userForm.value.prenom, this.userForm.value.email, this.userForm.value.adresse, this.userForm.value.ville
      , this.userForm.value.codePostal, this.userForm.value.numTel);
      this.serviceUser.addUser(user);
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
}
