package com.userfront.controller;

import com.userfront.domain.User;
import com.userfront.dto.SignUpDTO;
import com.userfront.repository.UserRepository;
import com.userfront.service.UserService;
import org.dozer.DozerBeanMapper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class HomeController {
    private final UserService userService;
    private UserRepository userRepository;

    public HomeController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }
    @GetMapping({"/","/index"})
    public String home(){
        return "index";
    }

    @GetMapping("/signup")
    public String signUp(Model model) {
        model.addAttribute("user", new SignUpDTO());
        return "signup";
    }

    @PostMapping("/signup")
    public String signUp(@ModelAttribute("user") SignUpDTO user, Model model){
        boolean exist = false;
        if (userService.emailExists(user.getEmail())){
            model.addAttribute("emailExists", true);
            exist = true;
        }
        if (userService.userNameExists(user.getUsername())) {
            model.addAttribute("usernameExists", true);
            exist = true;
        }
        if (exist){
            return "signup";
        }else {
            User userNew = new DozerBeanMapper().map(user, User.class);
            userRepository.save(userNew);
            return "redirect:/";
        }
    }

}
