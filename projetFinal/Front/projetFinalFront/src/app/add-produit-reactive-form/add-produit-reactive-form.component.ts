import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Produit } from '../produit';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-add-produit-reactive-form',
  templateUrl: './add-produit-reactive-form.component.html',
  styleUrls: ['./add-produit-reactive-form.component.css']
})
export class AddProduitReactiveFormComponent implements OnInit {

  genres: SelectItem[];
  supports: SelectItem[];

  produitForm = this.fb.group({
    nomProd: ['', Validators.required],
    genreProd: ['', Validators.required],
    supportProd: ['', Validators.required],
    dateSortieProd: ['', Validators.required],
    prixProd: ['', Validators.required],
    lienImage: ['', Validators.required],
    editeur: ['', Validators.required],
    description: ['', Validators.required]

  });

  constructor(private fb: FormBuilder, private serviceProduit: ProduitService) {
    this.genres = [];
    this.serviceProduit.allEnums().subscribe( g => {
      for(let s of Object.values(g))
      {
          this.genres.push({ label: s, value: { name: s}});
      }
    }); 

    this.supports = [
      { label: 'PS4', value: { name: 'SUPPORT_PS4' } },
      { label: 'Xbox One', value: { name: 'SUPPORT_XBOXONE' } },
      { label: 'PC', value: { name: 'SUPPORT_PC' } }
    ];
  }

  ngOnInit() {

  }

  onSubmit() {
    let produit = new Produit(this.produitForm.value.nomProd, this.produitForm.value.genreProd, this.produitForm.value.supportProd, this.produitForm.value.dateSortieProd, this.produitForm.value.prixProd, this.produitForm.value.lienImage, this.produitForm.value.editeur, this.produitForm.value.description);
    this.serviceProduit.addProduit(produit);
  }
}
