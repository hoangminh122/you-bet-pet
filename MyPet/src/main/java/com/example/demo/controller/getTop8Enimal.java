package com.example.demo.controller;

import com.example.demo.model.DongVat;
import com.example.demo.repository.DongVatRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class getTop8Enimal {

    @Autowired
    private DongVatRepo trendRepo;


    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/index/getHotEnimalNomal",method = RequestMethod.GET)
    public Collection<DongVat> getHotEnimalNomal(){
        try {
            Collection<DongVat> dongVats = trendRepo.findHotEnimalNomal();
            return dongVats;
        }
        catch (Exception e)
        {
            return  null;
        }
    }
//
//    @ResponseBody
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/index/getRickKidEnimal",method = RequestMethod.GET)
    public Collection<DongVat> getRickKidEnimal(){
        try {
            Collection<DongVat> dongVats = trendRepo.findRickKidEnimal();
            return dongVats;
        }
        catch (Exception e)
        {
            return  null;
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/index/getEnimalById/{id}",method = RequestMethod.GET)
    public Collection<DongVat> getEnimalById(@PathVariable Long id){
        try {
            Collection<DongVat> dongVats = trendRepo.findAllById(id);
            return dongVats;
        }
        catch (Exception e)
        {
            return  null;
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/index/searchEnimalByName/{name}",method = RequestMethod.GET)
    public Collection<DongVat> searchEnimalByName(@PathVariable String name){
            Collection<DongVat> dongVats = trendRepo.searchEnimalByName(name);
            return dongVats;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/index/findEnimalSameType/{id}",method = RequestMethod.GET)
    public Collection<DongVat> findEnimalSameType(@PathVariable Long id){
        Collection<DongVat> dongVats = trendRepo.findEnimalSameType(id);
        return dongVats;
    }



}
