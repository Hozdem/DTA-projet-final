import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MyUser } from '../my-user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-user-reactive-form',
  templateUrl: './gestion-user-reactive-form.component.html',
  styleUrls: ['./gestion-user-reactive-form.component.css']
})
export class GestionUserReactiveFormComponent implements OnInit {
  utilisateurs: Array<MyUser> = [];
  adminSelected: Array<MyUser> = [];
  userChangement: Array<MyUser> = [];

  roleForm = this.fb.group({
    admins: [null],
  });
  constructor(private fb: FormBuilder, private serviceUser: UserService, private router: Router) { }

  ngOnInit() {
    this.serviceUser.getAllUser().subscribe(u => {
      for(let user of u)
      {
        if(user.role === "ROLE_ADMIN")
        {
          this.adminSelected.push(user);
        }
        else
        {
          this.utilisateurs.push(user);
        }
      }
    });
  }
  
  onSubmit()
  {
    for(let u of this.adminSelected)
    {
      if(u.role !== 'ROLE_ADMIN'){
        u.role = "ROLE_ADMIN";
        this.userChangement.push(u);
      }
    }

    for(let uUser of this.utilisateurs)
    {
      if(uUser.role !== 'ROLE_USER'){
        uUser.role = "ROLE_USER";
        this.userChangement.push(uUser);
      }
    }

    this.serviceUser.updateListUser(this.userChangement);
  }
}
