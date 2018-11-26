package fr.dta.projetFinal.security;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.dta.projetFinal.enums.EnumRoles;
import fr.dta.projetFinal.model.MyUser;
import fr.dta.projetFinal.service.MyUserService;

@Service
@Transactional
public class AuthentificationService implements UserDetailsService{

	@Autowired
	private MyUserService myuserservice;
	
	@Override
	public UserDetails loadUserByUsername(final String login) {
		MyUser user =myuserservice.findBylogin(login);
		List<GrantedAuthority> rules = this.getUserCredentials(user);
		return new org.springframework.security.core.userdetails.User(user.getLogin(), user.getPassword(), rules);
		
	}

	private List<GrantedAuthority> getUserCredentials(MyUser user) {
		 List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		 
		 authorities.add(new SimpleGrantedAuthority(EnumRoles.ROLE_USER.getRole()));
		 if(user.getRole().equals(EnumRoles.ROLE_ADMIN.getRole()))
		 {
			 authorities.add(new SimpleGrantedAuthority(EnumRoles.ROLE_ADMIN.getRole()));
		 }
		 
		return authorities;
	}

}