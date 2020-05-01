package com.example.demo.controller.AdminPage;

import com.example.demo.model.DongVat;
import com.example.demo.repository.DongVatRepo;
import com.example.demo.repository.LoaiDongVatRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.awt.*;
import java.util.Map;
import java.util.Optional;

@Controller
public class PetUpdateInfo {

    @Autowired
    private DongVatRepo dongVatRepo;


    @RequestMapping(value = "/addAnimalToDatabase",method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
    public DongVat addAnimalToDatabase(@RequestBody DongVat pet){
        try {
            DongVat temp =dongVatRepo.save(pet);
            return temp;
        }
        catch(Exception e){
           e.printStackTrace();
        }
     return null;
    }
    public boolean setValuePet(DongVat pet,String s){
             switch (s){
                 case "tenDV" : {
                     pet.setTenDV(s);
                     break;
                 }
                 case "giaTien" : {
                     pet.setGiaTien(Float.parseFloat(s));
                     break;
                 }
                 case "tinhTrangSucKhoe" : {
                     pet.setTinhTrangSucKhoe(s);
                     break;
                 }
                 case "gioiTinh" : {
                     pet.setGioiTinh(Boolean.parseBoolean(s));
                     break;
                 }
                 case "thongTinCoBan" : {
                     pet.setThongTinCoBan(s);
                     break;
                 }
                 case "url" : {
                     pet.setUrl(s);
                     break;
                 } case "loaiDongVat" : {
//                     pet.setLoaiDongVat((Loa));
                     //xu ly sau
                     break;
                 }
                 case "chuNhan" : {
//                     pet.setGi(Float.parseFloat(s));
                     //xu ly sau
//                     break;
                 }
                 case "isNew" : {
                     pet.setNew(Boolean.parseBoolean(s));
                     break;
                 }
                 case "isRickKid" : {
                     pet.setRickKid(Boolean.parseBoolean(s));
                     break;
                 }
             }
        return false;
    }
    @RequestMapping(value = "/UpdateAnimalToDatabase",method = RequestMethod.PUT,produces = MediaType.APPLICATION_JSON_VALUE)
    public DongVat UpdateAnimalToDatabase(@RequestBody Map<String,String> pet){
        try {
            Optional<DongVat> temp =dongVatRepo.findById(Long.parseLong(pet.get("id")));
           temp.ifPresent(dongVat -> {
                pet.forEach((s, s2) -> {
                    setValuePet(dongVat,s);
                });
                dongVatRepo.save(dongVat);
           });
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }
    @RequestMapping(value = "/DeleteAnimalToDatabase",method = RequestMethod.DELETE,produces = MediaType.APPLICATION_JSON_VALUE)
    public DongVat DeleteAnimalToDatabase(@RequestParam Long id){
        try {
            Optional<DongVat> temp =dongVatRepo.findById(id);
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }


}
