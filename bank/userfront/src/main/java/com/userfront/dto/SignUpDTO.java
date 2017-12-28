package com.userfront.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
public class SignUpDTO {

    @NotNull
    private String username;

    @NotNull
    private String password;

    @NotNull
    private String firstName;

    private String lastName;

    @Email
    private String email;

    private String phone;

}
