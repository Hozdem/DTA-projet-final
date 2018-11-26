import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.css']
})
export class FicheProduitComponent implements OnInit {

  id: number;
  produit: Produit = new Produit("titre", null, "", new Date(), 0, "", "", "", false);
  constructor(private router: Router, private serviceProduit: ProduitService, private activatedRoute: ActivatedRoute) { 

  }
  nombreExemplaire: number = 1;
  produitPanier = [];

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.serviceProduit.getProduit(this.id).subscribe(p => {
      if(p !== null)
      {
        // si le produit existe vraiment
        this.produit = p;
        if(localStorage.getItem('panier') !== null)
        {
          this.produitPanier = JSON.parse(localStorage.getItem('panier'));
          this.nombreExemplaire = this.produitPanier.filter(p => p.produit.id === this.produit.id)[0].nbExemplaire;
          if(this.nombreExemplaire <= 0)
          {
            this.nombreExemplaire = 1;
          }
        }
      }
      else
      {
        this.router.navigate(['/']);
      }
    });
  }

  ajouterPanier()
  {
    let produitAjoute = {produit: this.produit, nbExemplaire: this.nombreExemplaire};
    this.produitPanier = this.produitPanier.filter( p => p.produit.id !== produitAjoute.produit.id);
    this.produitPanier.push(produitAjoute);
    localStorage.setItem('panier', JSON.stringify(this.produitPanier));
  }

  retirerExemplaire()
  {
    if(this.nombreExemplaire > 1)
    {
      this.nombreExemplaire--;
    }
  }

  ajouterExemplaire()
  {
    this.nombreExemplaire++;
  }
}
