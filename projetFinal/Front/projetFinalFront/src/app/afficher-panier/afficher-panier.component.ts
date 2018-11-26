import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-afficher-panier',
  templateUrl: './afficher-panier.component.html',
  styleUrls: ['./afficher-panier.component.css']
})
export class AfficherPanierComponent implements OnInit {

  panier = [];
  prixTotal: number = 0;
  afficherVerificationCommande = false;
  constructor() { }

  ngOnInit() {
    this.panier = JSON.parse(localStorage.getItem('panier'));
    if(this.panier !== null)
    {
      for(let p of this.panier)
      {
        this.prixTotal += (p.nbExemplaire * p.produit.prix);
      }
    }
  }

  retirerExemplaire(produit: any)
  {
    if(produit.nbExemplaire > 0)
    {
      let idElement = this.panier.indexOf(produit);
      this.panier[idElement] = {produit: this.panier[idElement].produit, nbExemplaire: this.panier[idElement].nbExemplaire-1};
      localStorage.setItem('panier', JSON.stringify(this.panier));
      this.prixTotal -= produit.produit.prix;
    }
  }

  ajouterExemplaire(produit: any)
  {
    let idElement = this.panier.indexOf(produit);
    this.panier[idElement] = {produit: this.panier[idElement].produit, nbExemplaire: this.panier[idElement].nbExemplaire+1};
    localStorage.setItem('panier', JSON.stringify(this.panier));
    this.prixTotal += produit.produit.prix;
  }

  commander()
  {

  }

  afficherVerification()
  {
    this.afficherVerificationCommande = !this.afficherVerificationCommande;
  }
}
