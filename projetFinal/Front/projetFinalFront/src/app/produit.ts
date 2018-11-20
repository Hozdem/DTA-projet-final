export class Produit {
    id: number;
    titre: string;
    genres: Array<string> = [];
    support: string;
    dateSortie: Date;
    prix: number;
    lienImage: string;
    editeur: string;
    description: string;
    activated: boolean;

    constructor(titre: string, genres: Array<string>, support: string, dateSortie: Date, prix: number, lienImage: string, editeur: string, description: string , activated: boolean) {
        this.titre = titre;
        this.genres = genres;
        this.support = support;
        this.dateSortie = dateSortie;
        this.prix = prix;
        this.lienImage = lienImage;
        this.editeur = editeur;
        this.description = description;
        this.activated = activated;
    }

    FormatDeDate
}
