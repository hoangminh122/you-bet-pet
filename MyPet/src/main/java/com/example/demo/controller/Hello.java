package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.example.demo.model.User;

@Controller
public class Hello {
    private String userTrue="minh hoang";
    private String passTrue="123456";
    @RequestMapping(value = "/login-api", method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public User sayHello(@RequestBody User user) {
        if ((user.getUserName()).equals(userTrue) && (user.getPassWord()).equals(passTrue)) {
            return user;
        }

        return new User();
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    @ResponseBody
    public String sayHello() {
        return "ok";
    }


}
