export class MyUser {
	id: number;
	login: string;
	password: string;
	role: string;
	nom: string;
	prenom: string;
	email: string;
	adresse: string;
	ville: string;
	codePostal: string;
	numTel: string;
	
	constructor(login: string, password: string, role: string, nom: string, prenom: string, email: string, adresse: string, ville: string, codePostal: string, numTel?: string)
	{
		this.login = login;
		this.password = password;
		this.role = role;
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.adresse = adresse;
		this.ville = ville;
		this.codePostal = codePostal;
		this.numTel = this.numTel === undefined? "" : numTel;
	}
}
