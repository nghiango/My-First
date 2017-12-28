package com.userfront.domain;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.dozer.Mapping;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @NotNull
    @Column(unique = true)
    @Mapping("username")
    private String username;

    @NotNull
    @Mapping("password")
    private String password;

    @NotNull
    @Mapping("firstName")
    private String firstName;

    @Mapping("lastName")
    private String lastName;

    @Email
    @Column(unique = true)
    @Mapping("email")
    private String email;

    private boolean enable = true;

    @Mapping("phone")
    private String phone;
    @OneToOne
    private PrimaryAccount primaryAccount;
    @OneToOne
    private SavingsAccount savingsAccount;
    @OneToMany(mappedBy = "user")
    private Set<Recipient> recipients;
    @OneToMany(mappedBy = "user")
    private Set<Apointment> apointments;
}
