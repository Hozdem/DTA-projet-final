import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { SelectItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { promise } from 'protractor';
import { ListeProduitsService } from '../liste-produits.service';
import { empty } from 'rxjs';

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

  activated: boolean;

  constructor(private service: ProduitService, private router: Router, private activatedRoute: ActivatedRoute, private listeProduitsService: ListeProduitsService)
  { 

  }

  ngOnInit() {
    this.sortOptions = [
      { label: 'Tri alphabétique croissant', value: '!titre' },
      { label: 'Tri alphabétique décroissant', value: 'titre' },
      { label: 'Tri par support', value: 'support' }
    ];
  }

  searchProduits(titre: string, genres: string[], supports: string[]) {
    this.service.searchProduit(titre, genres, supports).subscribe(
      produits => {
        this.listeProduitsService.setProduits(produits);
      });
  }

  getProduits(): Produit[] {
    return this.listeProduitsService.getProduits();
  }

  selectProduit(event: Event, produit: Produit) {
    this.selectedProduit = produit;
    this.displayDialog = true;
    this.activated = produit.activated;
    event.preventDefault();
  }

  onSortChange(event)
  {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
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

  onClickModifProduit()
  {
    this.router.navigate(['/updateProduit/' + this.selectedProduit.id]);
  }

  onClickDeleteProduit()
  {
    let list = this.listeProduitsService.getProduits();
    list = list.filter(item => item != this.selectedProduit );
    this.listeProduitsService.setProduits(list);
    this.router.navigate(['deleteProduit/' + this.selectedProduit.id]);
  }

  eventActivatedProduit()
  {
    this.selectedProduit.activated = !this.selectedProduit.activated;
    this.service.updateProduit(this.selectedProduit);
  }
}