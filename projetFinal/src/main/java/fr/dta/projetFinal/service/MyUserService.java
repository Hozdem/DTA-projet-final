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
	
	
	public Optional<MyUser> findBylogin(String login)
	{
		return myUserRepository.findByLogin(login);
		
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
	
	public MyUser verifPassword(MyUser args)
	{
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		Optional<MyUser> userOption = findBylogin(args.getLogin());
		if(userOption.isPresent()) {
			MyUser user = userOption.get();
			if(passwordEncoder.matches(args.getPassword(),user.getPassword())) {
				return user;
			};
		}
		return null;
	}
	
	public boolean verifPassword(long id, String password)
	{
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
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
