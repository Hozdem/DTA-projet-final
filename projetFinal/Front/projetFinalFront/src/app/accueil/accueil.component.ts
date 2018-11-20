import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  nouveautesProduit: Array<Produit> = [];
 
  constructor() { }

  ngOnInit() {
  }

}
