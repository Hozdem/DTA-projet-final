package fr.dta.projetFinal.service;

import java.util.*;

import org.springframework.stereotype.Service;

import fr.dta.projetFinal.model.MyUser;

@Service
public class MyUserService
{

	private List<MyUser> users;
	
	// a implémenter
	public Optional<MyUser> findOneByLogin(String username)
	{
		// TODO Auto-generated method stub
		return null;
	}

	/*
	public MyUserService()
	{ 
		this.users = new ArrayList<MyUser>();
	}

	public List<MyUser> getAllUsers()
	{
		return this.users;
	}

	public void addMyuser(MyUser mu)
	{
		this.users.add(mu);
	}
	*/
}
