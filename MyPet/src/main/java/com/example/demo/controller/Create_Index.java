package com.example.demo.controller;

import com.example.demo.model.DongVat;
import com.example.demo.repository.DongVatRepo;
import com.example.demo.repository.TrendRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Collection;
import java.util.List;

@Controller
public class Create_Index {

    @Autowired
    private DongVatRepo trendRepo;
    @ResponseBody
    @RequestMapping(name = "/slide",method = RequestMethod.GET)
    public Collection<DongVat> findDongVatTopTrend(){
                    Collection<DongVat> dongVats=trendRepo.findDongVat_trend();
                    return dongVats;
    }

}
