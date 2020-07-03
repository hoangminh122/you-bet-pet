package com.example.demo.controller;

import com.example.demo.model.ChuNhan;
import com.example.demo.repository.ChuNhanRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Optional;

@Controller
public class Get_Info_People {
    @Autowired
    private ChuNhanRepo chuNhanRepo;

//    public Get_Info_People(ChuNhanRepo chuNhanRepo) {
//        this.chuNhanRepo = chuNhanRepo;
//    }

    @ResponseBody
    @RequestMapping(value = "/getAllChuNhan",method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    private List<ChuNhan> getDongVats(){
        return chuNhanRepo.findAll();
    }
//    @RequestMapping(value = "/getAnimalById",method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
//    private Optional<ChuNhan> getDongVatByChuNhan(@PathVariable("id") final Long id){
//        return chuNhanRepo.findById(id);
//    }
//    @RequestMapping(value = "/deleteAnimalById",method = RequestMethod.GET)
//    private void deleteChuNhan(@PathVariable("id") Long id){
//        chuNhanRepo.deleteById(id);
//
//    }


}
