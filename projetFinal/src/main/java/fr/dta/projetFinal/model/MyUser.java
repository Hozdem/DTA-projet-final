package fr.dta.projetFinal.model;

import javax.persistence.*;


@Entity
public class MyUser
{	
	@Id
	@GeneratedValue
	private long id;
	
	@Column
	private String login;

	@Column
	private String password;
	
	@Column
	private String role;
	
	@Column
	private String nom;
	
	@Column
	private String prenom;
	
	@Column 
	private String email;
	
	@Column 
	private String adresse;
	
	@Column
	private String ville;
	
	@Column 
	private String codePostal;
	
	@Column
	private String numTel;
	
	public MyUser()
	{
		
	}

	public MyUser(String login, String password, String role, String nom, String prenom, String email,
			String adresse, String ville, String codePostal) {
		this(login, password, role, nom, prenom, email, adresse, ville, codePostal, "");
	}
	
	

	public MyUser(String login, String password, String role, String nom, String prenom, String email,
			String adresse, String ville, String codePostal, String numTel) {
		super();
		this.login = login;
		this.password = password;
		this.role = role;
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.adresse = adresse;
		this.ville = ville;
		this.codePostal = codePostal;
		this.numTel = numTel;
	}



	public long getId()
	{
		return id;
	}

	public void setId(long id)
	{
		this.id = id;
	}

	public String getLogin()
	{
		return login;
	}

	public void setLogin(String login)
	{
		this.login = login;
	}

	public String getPassword()
	{
		return password;
	}

	public void setPassword(String password)
	{
		this.password = password;
	}

	public String getRole()
	{
		return role;
	}

	public void setRole(String role)
	{
		this.role = role;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public String getCodePostal() {
		return codePostal;
	}

	public void setCodePostal(String codePostal) {
		this.codePostal = codePostal;
	}

	public String getNumTel() {
		return numTel;
	}

	public void setNumTel(String numTel) {
		this.numTel = numTel;
	}

	@Override
	public String toString() {
		return "MyUser [id=" + id + ", login=" + login + ", password=" + password + ", role=" + role + ", nom=" + nom
				+ ", prenom=" + prenom + ", email=" + email + ", adresse=" + adresse + ", ville=" + ville
				+ ", codePostal=" + codePostal + ", numTel=" + numTel + "]";
	}
}
