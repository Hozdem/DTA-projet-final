export class Produit {
    id: number;
    nomProd: string;
    genreProd: Array<string>;
    supportProd: Array<string>;
    dateSortieProd: Date;
    prixProd: number;
    lienImage: string;
    editeur: string;
    description: string;

    constructor(nomProd: string, genreProd: Array<string>, supportProd: Array<string>, dateSortieProd: Date, prixProd: number, lienImage: string, editeur: string, description: string) {
        this.nomProd = nomProd;
        this.genreProd = genreProd;
        this.supportProd = supportProd;
        this.dateSortieProd = dateSortieProd;
        this.prixProd = prixProd;
        this.lienImage = lienImage;
        this.editeur = editeur;
        this.description = description;
    }
}
