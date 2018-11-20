import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  
  nouveautesProduit: Array<Produit> = [];
  meilleuresVentes: Array<Produit> = [] ;
  nouveauxAjouts: Array<Produit> = [] ;
  index :number = 0;
  
  constructor(private serviceProduit: ProduitService) { }
  
  ngOnInit() {
    this.serviceProduit.getAllProduit().subscribe( p => {
      this.nouveautesProduit = Object.values(p);
      for(let i = 0 ; i < 10; i++)
      {
        this.meilleuresVentes.push(p[i]);
        this.nouveauxAjouts.push(p[i]);
      }
    });
  }
}
