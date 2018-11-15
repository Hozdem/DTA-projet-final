package fr.dta.projetFinal.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import fr.dta.projetFinal.model.MyUser;
import fr.dta.projetFinal.repository.MyUserRepository;


@Service
public class MyUserService
{
	@Autowired
	MyUserRepository myUserRepository;
	
	// a implémenter
	public Optional<MyUser> findOneByLogin(String username)
	{
		// TODO Auto-generated method stub
		return null;
	}
	
	public MyUser insertMyUser(MyUser user)
	{
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		
		return myUserRepository.save(user);
	}

	public List<MyUser> findAll() {
		// TODO Auto-generated method stub
		return (List<MyUser>) myUserRepository.findAll();
	}

	public Optional<MyUser> findById(long id) {
		// TODO Auto-generated method stub
		return myUserRepository.findById(id);
	}

	public void deleteById(long id) {
		myUserRepository.deleteById(id);
	}
	
/*
			

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
