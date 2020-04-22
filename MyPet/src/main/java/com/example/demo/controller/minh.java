package com.example.demo.controller;

import com.example.demo.model.User;

public class minh {

    public static String demo(User user){
        user.setUserName("asdasdasdasfasf");

        return "";
    }

    public static void main(String[] args) {
        minh temp = new minh();
        User m=new User("minh","sdsdf");
        System.out.println(m.getUserName());
        temp.demo(m);
        System.out.println(m.getUserName());

    }
}
