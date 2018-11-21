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

	BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
	public MyUser findBylogin(String login)
	{
		Optional<MyUser> u = myUserRepository.findByLogin(login);
		if(u.isPresent())
		{
			return u.get();
		}
		else
		{
			return null;
		}
	}
	
	public MyUser insertMyUser(MyUser user)
	{
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		
		return myUserRepository.save(user);
	}
	
	public MyUser updateMyUser(MyUser user)
	{
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return myUserRepository.save(user);
	}
	
	public List<MyUser> updateMyUser(List<MyUser> users)
	{
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		for(MyUser u : users)
		{
			u.setPassword(passwordEncoder.encode(u.getPassword()));
		}
		
		return (List<MyUser>) myUserRepository.saveAll(users);
	}
	
	public MyUser verifPassword(MyUser args)
	{
		MyUser user = findBylogin(args.getLogin());
		if(passwordEncoder.matches(args.getPassword(),user.getPassword())) {
			return user;
		}
		return null;
	}
	
	public boolean verifPassword(long id, String password)
	{
		Optional<MyUser> userOption = findById(id);
		if(userOption.isPresent()) {
			MyUser user = userOption.get();
			return passwordEncoder.matches(password, user.getPassword());
		}
		return false;
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
