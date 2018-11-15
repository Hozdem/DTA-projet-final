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

import fr.dta.projetFinal.enums.EnumRole;
import fr.dta.projetFinal.model.MyUser;
import fr.dta.projetFinal.service.MyUserService;

@Service
@Transactional
public class AuthentificationService implements UserDetailsService{

	@Autowired
	private MyUserService myuserservice;
	
	@Override
	public UserDetails loadUserByUsername(final String login) {
		Optional<MyUser> option = myuserservice.findBylogin(login);
		if (option.isPresent()) {
			MyUser user = option.get();
			List<GrantedAuthority> rules = this.getUserCredentials(user);
		
			return new org.springframework.security.core.userdetails.User(user.getLogin(), user.getPassword(), rules);
		}
		throw new UsernameNotFoundException("username.not.found");
	}

	private List<GrantedAuthority> getUserCredentials(MyUser user) {
		 List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		 
		 authorities.add(new SimpleGrantedAuthority(EnumRole.ROLE_USER.getRole()));
		 if(user.getRole().equals(EnumRole.ROLE_ADMIN.getRole()))
		 {
			 authorities.add(new SimpleGrantedAuthority(EnumRole.ROLE_ADMIN.getRole()));
		 }
		 
		return authorities;
	}

}