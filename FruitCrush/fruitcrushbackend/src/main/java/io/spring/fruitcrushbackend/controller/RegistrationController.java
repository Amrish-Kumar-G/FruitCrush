package io.spring.fruitcrushbackend.controller;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.spring.fruitcrushbackend.model.User;
import io.spring.fruitcrushbackend.service.RegistrationService;



@RestController
@CrossOrigin()
public class RegistrationController {
    @Autowired
    private RegistrationService service;
	@RequestMapping
	@GetMapping("/")
	public Boolean loginUser(@RequestBody User user) throws Exception {
		User tempUser = null ;
		String tempEmail = user.getEmailId();
		String tempPass = user.getPassword();
		if(tempEmail != null) {
			tempUser = service.fetchUserByEmail(tempEmail);
			if(tempUser.getPassword().equals(tempPass)){
				return true;
			}
		}
		if(tempUser == null) {
			throw new Exception("Invalid Login"+tempUser);
			
		}
		return false;
	}
    @PostMapping("/admin/login")
	public Boolean loginAdmin(@RequestBody User user) throws Exception {
		User tempUser = null ;
		String tempEmail = user.getEmailId();
		String tempPass = user.getPassword();
		if(tempEmail != null) {
			tempUser = service.fetchUserByEmail(tempEmail);
			if(tempUser.getPassword().equals(tempPass)){
				return true;
			}
		}
		if(tempUser == null) {
			throw new Exception("Invalid Login");
		}
		return false;
	}
    @PostMapping("/signup")
	public Boolean registeredUser(@RequestBody User user) throws Exception {
		String tempmail = user.getEmailId();
		if(tempmail != null && !"".equals(tempmail)) {
			User userobj = service.fetchUserByEmail(tempmail);
			if(userobj != null) {
				throw new Exception("User "+ tempmail +" Already Found, Can't Register");
			}
		}
		User userObj = null;
		userObj = service.saveUser(user);
		if(userObj!=null){
			return true;
		}
		return false;
	}
	@PostMapping("/admin/signup")
	public Boolean registeredAdmin(@RequestBody User user) throws Exception {
		String tempmail = user.getEmailId();
		if(tempmail != null && !"".equals(tempmail)) {
			User userobj = service.fetchUserByEmail(tempmail);
			if(userobj != null) {
				throw new Exception("User "+ tempmail +" Already Found, Can't Register");
			}
		}
		User userObj = null;
		userObj = service.saveUser(user);
		if(userObj!=null){
			return true;
		}
		return false;
	}
    @DeleteMapping("/admin/deleteStudentByAdmin")
	public void deleteStudent(@RequestParam int id) {
		service.deleteUser(id);
	}
}
