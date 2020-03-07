package com.example.demo.controller;

import com.example.demo.model.DongVat;
import com.example.demo.repository.DongVatRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
public class Get_Info_Nomal {

    @Autowired
    private DongVatRepo dongVatRepo;

    @ResponseBody
    @RequestMapping(value = "/getAllAnimal", method = RequestMethod.GET)
    private List<DongVat> getDongVats() {
        return dongVatRepo.findAll();
    }

    @RequestMapping(value = "/getAnimalById", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    private Optional<DongVat> getDongVatByAnimal(@PathVariable("id") final Long id) {
        return dongVatRepo.findById(id);
    }

    @RequestMapping(value = "/deleteAnimalById", method = RequestMethod.GET)
    private void deleteDongVat(@PathVariable("id") Long id) {
        dongVatRepo.deleteById(id);

    }


}
