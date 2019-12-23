package com.example.demo.controller;

import com.example.demo.model.DauGia;
import com.example.demo.model.DongVat;
import com.example.demo.repository.DauGiaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
public class Group_Secret {

    @Autowired
    DauGiaRepo dauGiaRepo;

    private int GROUP=1;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/index/getMoneyAuctionForIdGroup/{group}",method = RequestMethod.GET)
    public Collection<DauGia> getMoneyAuctionForIdGroup(@PathVariable Long group){
        List<DauGia> daugia  = (List<DauGia>) dauGiaRepo.find_auction_by_IdGroup(group);
        return daugia;
    }


}
