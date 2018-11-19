import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration-reactive-form',
  templateUrl: './administration-reactive-form.component.html',
  styleUrls: ['./administration-reactive-form.component.css']
})
export class AdministrationReactiveFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addProduit()
  {
    this.router.navigate(['/addProduit']);
  }

  gererRoles()
  {

  }
}

