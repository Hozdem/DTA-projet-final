import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-afficher-panier',
  templateUrl: './afficher-panier.component.html',
  styleUrls: ['./afficher-panier.component.css']
})
export class AfficherPanierComponent implements OnInit {

  panier = [];
  constructor() { }

  ngOnInit() {
    this.panier = JSON.parse(localStorage.getItem('panier'));
    if(this.panier !== null)
    {

    }
  }

}
