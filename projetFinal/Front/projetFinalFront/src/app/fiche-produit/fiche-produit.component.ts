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

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.serviceProduit.getProduit(this.id).subscribe(p => {
      if(p !== null)
      {
        // si le produit existe vraiment
        this.produit = p;
      }
      else
      {
        this.router.navigate(['/']);
      }
    });
  }
}
