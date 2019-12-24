package com.example.demo.controller;

import com.example.demo.model.ChuNhan;
import com.example.demo.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.example.demo.model.User;

import java.util.Collection;

@Controller
public class Hello {

    @Autowired
    UserRepo userRepo;
    private String userTrue="minh hoang";
    private String passTrue="123456";
    @RequestMapping(value = "/login-api", method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public User sayHello(@RequestBody User user) {
//        if ((user.getUserName()).equals(userTrue) && (user.getPassWord()).equals(passTrue)) {
//            return user;
//        }

//        return new User();
        return null;
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    @ResponseBody
    public String sayHello() {
        return "ok";
    }

//    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "index/injection", method = RequestMethod.POST)
    @ResponseBody
    public Collection<User> postLogin(@RequestBody User chuNhan) {
        Collection<User> user = userRepo.postLogin(chuNhan.getEmail(),chuNhan.getPassWord());
        return user;
    }
}
