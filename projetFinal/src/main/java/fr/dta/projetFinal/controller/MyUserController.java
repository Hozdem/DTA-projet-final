package fr.dta.projetFinal.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.dta.projetFinal.model.MyUser;
import fr.dta.projetFinal.repository.MyUserRepository;
import fr.dta.projetFinal.service.MyUserService;

@RestController
@RequestMapping("/api/MyUsers")
public class MyUserController
{

	@Autowired
	MyUserService myUserService;
	
	@GetMapping("/")
	@CrossOrigin(origins = "*")
    public List<MyUser> greeting()
	{
        return myUserService.findAll();
    }
	
	@CrossOrigin(origins = "*")
	@GetMapping("/{id}")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
    public Optional<MyUser> greeting(@PathVariable long id)
	{
        return myUserService.findById(id);
    }
	
	@CrossOrigin(origins = "*")
	@GetMapping("/findUser/{login}")
    public Optional<MyUser> findBylogin(@PathVariable String login)
	{
        return myUserService.findBylogin(login);
    }
	

	@CrossOrigin(origins = "*")
	@PostMapping("/addMyUser")
    public MyUser insertMyUser(@RequestBody MyUser user)
	{
        return myUserService.insertMyUser(user);
    }
	

	@CrossOrigin(origins = "*")
	@PutMapping("/updateMyUser")
    public MyUser updateMyUser(@RequestBody MyUser user)
	{
		return myUserService.insertMyUser(user);
    }
	

	@CrossOrigin(origins = "*")
	@DeleteMapping("/deleteMyUser/{id}")
    public void deleteMyUser(@PathVariable long id)
	{
		myUserService.deleteById(id);
    }
}
