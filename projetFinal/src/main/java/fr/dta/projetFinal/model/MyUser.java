package fr.dta.projetFinal.model;

import javax.persistence.*;

import fr.dta.projetFinal.enums.EnumRole;

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
	
	
	public MyUser()
	{
		this("login", "password");
	}
	
	public MyUser(String login, String password)
	{
		this.login = login;
		this.password = password;
		this.role = EnumRole.ROLE_USER.getRole();
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
	
	
}
