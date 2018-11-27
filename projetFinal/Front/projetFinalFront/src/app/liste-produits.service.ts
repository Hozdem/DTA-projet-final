import { Injectable } from '@angular/core';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class ListeProduitsService {

  produits: Produit[];
  genre: string;
  support: string;
  constructor() { }

  setProduits(produits: Produit[]){
    this.produits = produits;
  }

  getProduits(): Produit[]{
    return this.produits;
  }

  getGenre()
  {
    return this.genre;
  }

  setGenre(s: string)
  {
    this.genre = s;
  }

  getSupport()
  {
    return this.support;
  }

  setSupport(s: string)
  {
    this.support = s;
  }
}
