package com.example.demo.model;

import java.io.Serializable;

public class JwtRequest implements Serializable {
    private String email;
    private String password;

    //default construction for Json Parsing
    public JwtRequest() {

    }

    public JwtRequest(String email, String password) {
        this.setEmail(email);
        this.setPassword(password);
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
