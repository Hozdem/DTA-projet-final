package fr.dta.projetFinal.model;

import javax.persistence.*;

import fr.dta.projetFinal.enumRole.EnumRole;

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
	

	@Enumerated(EnumType.STRING)
	@Column
	private EnumRole role;
	
	
	public MyUser()
	{
		this("login", "password");
	}
	
	public MyUser(String login, String password)
	{
		this.login = login;
		this.password = password;
		this.role = EnumRole.ROLE_USER;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public EnumRole getRole() {
		return role;
	}

	public void setRole(EnumRole role) {
		this.role = role;
	}
	
	
}
