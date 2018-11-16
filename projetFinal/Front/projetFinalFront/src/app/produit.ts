export class Produit
{
    id: number;
    nomProd: string;
    genreProd: Array<string>;
    supportProd: Array<string>;
    dateSortieProd: Date;
    prixProd: number;

    constructor(name?: string, date?: Date, prix?: number)
    {
        this.id = 0;
        this.nomProd = name === undefined ? 'nom' : name;
        this.genreProd = [];
        this.supportProd = [];
        this.dateSortieProd = date === undefined ? new Date() : date;
        this.prixProd = prix === undefined ? 0 : prix;
    }


}
