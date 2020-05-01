package com.example.demo.controller;

import com.example.demo.model.DauGia;
import com.example.demo.repository.DauGiaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

@CrossOrigin(maxAge = 3600)
@RestController
public class Group_Secret {

    @Autowired
    DauGiaRepo dauGiaRepo;

    private int GROUP=1;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "getMoneyAuctionForIdGroup/{group}",method = RequestMethod.GET)
    public Collection<DauGia> getMoneyAuctionForIdGroup(@PathVariable Long group){
        List<DauGia> daugia  = (List<DauGia>) dauGiaRepo.find_auction_by_IdGroup(group);
        return daugia;
    }

    @CrossOrigin(origins = "http://localhost:3000")
//    @ResponseBody
    @RequestMapping(value = "index/updateMoneyAuctionForIdGroup/{dauGiaId}",method = RequestMethod.GET)
    public Collection<Long> updateMoneyAuctionForIdGroup(@PathVariable Long dauGiaId){
        Long money  = Long.valueOf(String.valueOf(dauGiaRepo.maxMoney(dauGiaId)));
        return Collections.singleton(money);
    }

    @CrossOrigin(origins = "http://localhost:3000")
//    @ResponseBody
    @RequestMapping(value = "index/updatedaugia",method = RequestMethod.POST)
    public Collection<DauGia> updatedaugia(@RequestBody DauGia daugia){
        try {
            dauGiaRepo.deleteById(daugia.getId());
        }
        catch (Exception e){
            ;
        }
       DauGia result = dauGiaRepo.save(daugia);
       return (Collection<DauGia>) result;

    }



}
