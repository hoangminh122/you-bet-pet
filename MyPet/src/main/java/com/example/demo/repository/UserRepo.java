package com.example.demo.repository;

import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;

public interface UserRepo  extends JpaRepository<User,Long> {
    @Query(value = "SELECT * FROM user where email= ?1 AND pass_word= ?2 ",nativeQuery = true)
    public Collection<User> postLogin(String email, String pass_word);
}
