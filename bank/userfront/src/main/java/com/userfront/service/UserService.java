package com.userfront.service;


import com.userfront.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public boolean emailExists(String email) {
        return userRepository.findByEmail(email).isPresent();
    }
    public boolean userNameExists(String userName) {
        return userRepository.findByUsername(userName).isPresent();
    }
}
