import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Produit } from '../produit';
import { SelectItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-produit-reactive-form',
  templateUrl: './add-produit-reactive-form.component.html',
  styleUrls: ['./add-produit-reactive-form.component.css']
})
export class AddProduitReactiveFormComponent implements OnInit {

  genresTab: SelectItem[];
  supportTab: SelectItem[]; 
  uploadedFiles: any[] = [];
  url = 'http://localhost:8091/api/MyUsers/stocker/';

  produitForm = this.fb.group({
    titre: ['', Validators.required],
    genres: [[], Validators.required],
    support: ['', Validators.required],
    dateSortie: ['', Validators.required],
    prix: ['', Validators.required],
    lienImage: ['', Validators.required],
    editeur: ['', Validators.required],
    description: ['', Validators.required]

  });

  constructor(private fb: FormBuilder, private serviceProduit: ProduitService, private messageService: MessageService) {
    this.genresTab = [];
    this.supportTab = [];
  }

  ngOnInit() {
    this.serviceProduit.allGenres().subscribe( g => {
      for(let s of Object.values(g))
      {
          this.genresTab.push({ label: s, value: s});
      }
    }); 

    this.serviceProduit.allSupports().subscribe( support => {
      for(let s of Object.values(support))
      {
          this.supportTab.push({ label: s, value: s });
      }
    }); 
  }

  onSubmit() {
    let produit = new Produit(this.produitForm.value.titre, this.produitForm.value.genres, this.produitForm.value.support, this.produitForm.value.dateSortie, this.produitForm.value.prix, this.produitForm.value.lienImage, this.produitForm.value.editeur, this.produitForm.value.description, true);
    //console.log(this.uploadedFiles);
    this.serviceProduit.addProduit(produit);
  }

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}
}
