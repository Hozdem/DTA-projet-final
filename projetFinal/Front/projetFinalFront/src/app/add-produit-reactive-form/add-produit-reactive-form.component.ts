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
    this.genres = [
      { label: 'Combat', value: { name: 'GENRE_COMBAT' } },
      { label: 'Plateforme', value: { name: 'GENRE_PLATEFORME' } },
      { label: 'FPS', value: { name: 'GENRE_FPS' } },
      { label: 'Shoot Them Up', value: { name: 'GENRE_SHOOTTHEMUP' } },
      { label: 'Rail Shooter', value: { name: 'GENRE_RAILSHOOTER' } },
      { label: 'TPS', value: { name: 'GENRE_TPS' } },
      { label: 'Aventure', value: { name: 'GENRE_ADVENTURE' } },
      { label: 'Simulateur', value: { name: 'GENRE_SIMULATEUR' } },
      { label: 'Action', value: { name: 'GENRE_ACTION' } },
      { label: 'Infiltration', value: { name: 'GENRE_INFILTRATION' } },
      { label: 'Survival Horror', value: { name: 'GENRE_SURVIVALHORROR' } },
      { label: 'Action RPG', value: { name: 'GENRE_ACTIONRPG' } },
      { label: 'Hack\'n slash', value: { name: 'GENRE_HACKNSLASH' } },
      { label: 'Rogue like', value: { name: 'GENRE_ROGUELIKE' } },
      { label: 'MMORPG', value: { name: 'GENRE_MMORPG' } },
      { label: 'Tactical RPG', value: { name: 'GENRE_TACTICALRPG' } },
      { label: 'JRPG', value: { name: 'GENRE_JRPG' } },
      { label: 'Puzzle', value: { name: 'GENRE_PUZZLE' } },
      { label: 'Labyrinthe', value: { name: 'GENRE_LABYRINTHE' } },
      { label: 'Gestion', value: { name: 'GENRE_GESTION' } },
      { label: 'Strategie tour par tour', value: { name: 'GENRE_TURNBASEDSTRATEGY' } },
      { label: 'Strategie temps reel', value: { name: 'GENRE_REALTIMESTRATEGY' } },
      { label: '4 X', value: { name: 'GENRE_4X' } },
      { label: 'Wargame', value: { name: 'GENRE_WARGAME' } },
      { label: 'Sport', value: { name: 'GENRE_SPORT' } },
      { label: 'Course', value: { name: 'GENRE_RACING' } },
      { label: 'Rythme', value: { name: 'GENRE_RHYTHM' } }

    ];
    this.supports = [
      { label: 'PS4', value: { name: 'SUPPORT_PS4' } },
      { label: 'Xbox One', value: { name: 'SUPPORT_XBOXONE' } },
      { label: 'PC', value: { name: 'SUPPORT_PC' } }
    ];
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.serviceProduit.allEnums());
    //let produit = new Produit(this.produitForm.value.nomProd, this.produitForm.value.selectedGenre, this.produitForm.value.supportProd, this.produitForm.value.dateSortieProd, this.produitForm.value.prixProd, this.produitForm.value.lienImage, this.produitForm.value.editeur, this.produitForm.value.description);
    //this.serviceProduit.addProduit(produit);
  }

}
