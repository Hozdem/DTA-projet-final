import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})

export class ProduitsComponent implements OnInit
{

  produits: Array<Produit> = [];

  selectedProduit: Produit;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  activated: boolean = false;

  constructor(private service: ProduitService, private router: Router)
  { 

  }

  ngOnInit()
  {
    this.service.getAllProduit().subscribe( p => {
      for(let prod of Object.values(p))
      {
        this.produits.push(prod);
      }
    });

    this.sortOptions = [
      {label: 'Tri alphabétique croissant', value: '!titre'},
      {label: 'Tri alphabétique décroissant', value: 'titre'},
      {label: 'Tri par support', value: 'support'}
    ];
    
  }

  selectProduit(event: Event, produit: Produit)
  {
    this.selectedProduit = produit;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event)
  {
    let value = event.value;

    if (value.indexOf('!') === 0)
    {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else
    {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }

  onDialogHide()
  {
    this.selectedProduit = null;
  }

  onClickDetails()
  {
    this.router.navigate(['/']);
  }

  //TODO RAJOUTER TOUTES LES METHODES: MODIFICATION , SUPPRESSION , ACTIVATION/DESACTIVATION DU PRODUIT 

  modifierProduit()
  {

  }

  supprimerProduit()
  {

  }
  
  eventActivatedProduit()
  {

  }
}