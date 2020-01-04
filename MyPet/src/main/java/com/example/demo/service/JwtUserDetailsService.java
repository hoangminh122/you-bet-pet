package com.example.demo.service;

import com.example.demo.DTO.UserDto;
import com.example.demo.model.ChuNhan;
import com.example.demo.repository.ChuNhanRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private ChuNhanRepo userDao;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//        if ("techgeeknext".equals(email)) {
//            return new User("techgeeknext", "$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6",
//                    new ArrayList<>());
//        } else {
//            throw new UsernameNotFoundException("User not found with username: " + email);
//        }
        ChuNhan user = userDao.findByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + email);
        }
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassWord(),
                new ArrayList<>());
    }
    public ChuNhan save(UserDto user){
        ChuNhan newUser = new ChuNhan();
        newUser.setEmail(user.getEmail());
        newUser.setPassWord(bcryptEncoder.encode(user.getPassword()));
//        newUser.setTenChuNhan(user.getTenChuNhan());
        newUser.setUserName(user.getUserName());
        newUser.setDiaChi(user.getDiaChi());
        newUser.setSdt(user.getSdt());
        return userDao.save(newUser);
    }
}
