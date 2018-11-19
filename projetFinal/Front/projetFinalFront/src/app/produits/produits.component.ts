import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit
{
  produits: Array<Produit> = [];
  constructor(private service: ProduitService)
  { 
  }

  ngOnInit()
  {
    this.service.getAllProduit().subscribe( p => {
      this.produits = p;
      console.log(p);
    });
  }

}