package com.cryptogramming.apirest.controller;


import com.cryptogramming.apirest.dto.RechargeDTO;
import com.cryptogramming.apirest.service.RechargeService;
import com.cryptogramming.apirest.domain.Recharge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RechargeController {

    
    @Autowired
    private RechargeService productService;
    @CrossOrigin
    @GetMapping(value="/recharges",produces = "application/json")
    public List<Recharge> getRecharges(@RequestParam String seller,@RequestParam String operator) {
        return  productService.getAllRecharges();
    }

    @PostMapping(value = "/recharge")
    @CrossOrigin
    public ResponseEntity  saveRecharge(@RequestBody RechargeDTO rechargeDTO){

        productService.createRecharge(rechargeDTO);
        return new ResponseEntity(HttpStatus.CREATED);

    }

}
