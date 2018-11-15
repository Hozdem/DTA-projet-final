package fr.dta.projetFinal.model;

import javax.persistence.*;

@Entity
public class MyUser {
	@Id
	@GeneratedValue
	private long id;
	
	@Column
	private String login;
	
	public MyUser()
	{
		
	}
}
