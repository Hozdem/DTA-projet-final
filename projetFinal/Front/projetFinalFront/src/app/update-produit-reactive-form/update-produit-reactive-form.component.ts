import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../produit.service';
import { SelectItem, MessageService } from 'primeng/api';
import { Produit } from '../produit';

@Component({
  selector: 'app-update-produit-reactive-form',
  templateUrl: './update-produit-reactive-form.component.html',
  styleUrls: ['./update-produit-reactive-form.component.css']
})
export class UpdateProduitReactiveFormComponent implements OnInit {
  
  genresTab: SelectItem[];
  supportTab: SelectItem[];
  imageTab: SelectItem[];
  
  uploadedFiles: any[] = [];
  urlSauvegardeImage = 'http://localhost:8091/api/Produits/stocker/';
  urlImageSelectionne = './assets/images/raw/uploaded/';
  
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
  
  id: number;
  titreProduit: string;
  vieuxProduit: Produit;
  
  constructor(private messageService: MessageService, private service: ProduitService, private fb: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.genresTab = [];
    this.supportTab = [];
  }
  
  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    
    this.service.allGenres().subscribe( g => {
      for(let s of Object.values(g))
      {
        this.genresTab.push({ label: s, value: s});
      }
    }); 
    
    this.service.allSupports().subscribe( support => {
      for(let s of Object.values(support))
      {
        this.supportTab.push({ label: s, value: s });
      }
    }); 
    
    this.service.getAllPathPictures().subscribe( pictures => {
      this.imageTab = [];
      let compteur = 0;
      for(let pict of pictures)
      {
        pict = pict.substring(0, pict.length-4);
        this.imageTab.push({label: pict, value: pict});
        compteur++;
      }
      this.service.getProduit(this.id).subscribe( p => {
        this.produitForm.setValue({
          titre: p.titre,
          genres: p.genres,
          support: p.support,
          dateSortie: p.dateSortie,
          prix: p.prix,
          lienImage: p.lienImage.substring(29, p.lienImage.length-4),
          editeur: p.editeur,
          description: p.description
        });
        this.titreProduit = p.titre;
        this.vieuxProduit = p;
      });
    });
  }
  
  onSubmit()
  {
    this.produitForm.value.lienImage = this.urlImageSelectionne + this.produitForm.value.lienImage + '.png';
    let produit = new Produit(this.produitForm.value.titre, this.produitForm.value.genres, this.produitForm.value.support, this.produitForm.value.dateSortie, this.produitForm.value.prix, this.produitForm.value.lienImage, this.produitForm.value.editeur, this.produitForm.value.description, true);
    this.vieuxProduit.activated = false;
    this.service.updateProduit(this.vieuxProduit);
    this.service.addProduit(produit);
  }
  
  onUpload(event) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
}
