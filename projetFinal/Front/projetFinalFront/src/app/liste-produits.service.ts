import { Injectable } from '@angular/core';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class ListeProduitsService {

  produits: Produit[];
  constructor() { }

  setProduits(produits: Produit[]){
    this.produits = produits;
  }

  getProduits(): Produit[]{
    return this.produits;
  }
}
