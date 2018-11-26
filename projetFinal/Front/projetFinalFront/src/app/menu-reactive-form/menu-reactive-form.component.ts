import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UserService } from '../user.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { MyUser } from '../my-user';

@Component({
  selector: 'app-menu-reactive-form',
  templateUrl: './menu-reactive-form.component.html',
  styleUrls: ['./menu-reactive-form.component.css']
})
export class MenuReactiveFormComponent implements OnInit {

  menu: MenuItem[];
  
  constructor(private serviceUser: UserService) { }

  ngOnInit() {
    this.serviceUser.test().subscribe(m => this.menu = m);
  }
}
