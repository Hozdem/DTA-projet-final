import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { SelectItem, MenuItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { promise } from 'protractor';
import { ListeProduitsService } from '../liste-produits.service';
import { empty, generate } from 'rxjs';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import { CheckboxModule } from 'primeng/checkbox';
import { FormGroup, FormBuilder, FormArrayName } from '@angular/forms';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})

export class ProduitsComponent implements OnInit {

  produits: Array<Produit> = [];

  selectedProduit: Produit;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  activated: boolean;

  items: MenuItem[];
  itemTmp = [];

  itemSelected: FormArrayName;

  support: Array<string> = [];
  genre: Array<string> = [];

  testBool = true;

  form = this.formBuilder.group({
    Supports: [],
    Genres: []
  });

  constructor(private service: ProduitService, private router: Router, private listeProduitsService: ListeProduitsService, private formBuilder: FormBuilder) {
    this.support.push(this.listeProduitsService.getSupport());
    this.genre.push(this.listeProduitsService.getGenre());
  }

  ngOnInit() {
    this.items = [];
    this.service.allSupports().subscribe(s => {
      for (let value of Object.values(s)) {
          if (this.listeProduitsService.getSupport() === value) {
            this.itemTmp.push({ label: value, valeur: true });
          }
          else {
            this.itemTmp.push({ label: value, valeur: false });
          }
      }

      this.items = [{
        label: 'Supports',
        items: this.itemTmp
      }];

      this.service.allGenres().subscribe(g => {
        this.itemTmp = [];
        for (let value of Object.values(g)) {
            if (value === this.listeProduitsService.getGenre()) {
              this.itemTmp.push({ label: value, valeur: true });
            }
            else {
              this.itemTmp.push({ label: value, valeur: false });
            }
        }

        this.items.push({
          label: 'Genres',
          items: this.itemTmp
        });
      });

    });
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

  onSortChange(event) {
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

  onDialogHide() {
    this.selectedProduit = null;
  }

  onClickDetails(id: number) {
    this.router.navigate(['/ficheProduit/' + id]);
  }

  onClickModifProduit() {
    this.router.navigate(['/updateProduit/' + this.selectedProduit.id]);
  }

  onClickDeleteProduit() {
    let list = this.listeProduitsService.getProduits();
    list = list.filter(item => item != this.selectedProduit);
    this.listeProduitsService.setProduits(list);
    this.router.navigate(['deleteProduit/' + this.selectedProduit.id]);
  }

  eventActivatedProduit() {
    this.selectedProduit.activated = !this.selectedProduit.activated;
    this.service.updateProduit(this.selectedProduit);
  }

  submit() {
    this.searchProduits('', this.genre, this.support);
  }

  test(type, value) {
    if (type === 'Supports') {
      this.pushArray(value, this.support);
    } else {
      this.pushArray(value, this.genre);
    }
    console.log(this.genre+' '+this.support);
  }

  pushArray(value: string, array: string[]) {
    if (array.includes(value)) {
      let idx = this.support.indexOf(value);
      array.splice(idx, 1);
    } else {
      array.push(value);
    }
  }
}