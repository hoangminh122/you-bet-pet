package com.example.demo.controller;

import com.example.demo.model.ChuNhan;
import com.example.demo.model.LoaiDongVat;
import com.example.demo.repository.ChuNhanRepo;
import com.example.demo.repository.LoaiDongVatRepo;
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
public class Get_Infor_LoaiDv {

    @Autowired
    private LoaiDongVatRepo loaiDvRepo;

    //
    @ResponseBody
    @RequestMapping(value = "/getAllLoaiDv", method = RequestMethod.GET)
    private List<LoaiDongVat> getLoaiDongVats() {
        return loaiDvRepo.findAll();
    }

    @RequestMapping(value = "/getAnimalByIdLoaiDv", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    private Optional<LoaiDongVat> getDongVatByChuNhan(@PathVariable("id") final Long id) {
        return loaiDvRepo.findById(id);
    }

    @RequestMapping(value = "/deleteAnimalByIdLoaiDv", method = RequestMethod.GET)
    private void deleteLoaiDv(@PathVariable("id") Long id) {
        loaiDvRepo.deleteById(id);

    }

}
