package com.cryptogramming.apirest.service;

import com.cryptogramming.apirest.dto.RechargeDTO;
import com.cryptogramming.apirest.repository.RechargeRepository;
import com.cryptogramming.apirest.domain.Recharge;

import org.aspectj.weaver.ast.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Predicates;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public  class RechargeService  {

    @Autowired
    RechargeRepository repository;

    public List<Recharge> getAllRecharges(String operator,String seller) {
           List<Recharge> nameList =new ArrayList();
           nameList=repository.findAll();
            if(!operator.isEmpty() ){
                nameList =nameList.stream().filter(f -> operator.equals(f.getOperator()  )) 
                .collect(Collectors.toList());
            }


            if(!seller.isEmpty() ){
                nameList =nameList.stream().filter(f -> Objects.nonNull(f.getSeller()) && f.getSeller().contains(seller))
                .collect(Collectors.toList());
            } 

            return nameList;
    }


    public void createRecharge(RechargeDTO rechargeDTO) {
        Recharge recharge = new Recharge(
                rechargeDTO.getId(),
                rechargeDTO.getOperator(),
                rechargeDTO.getSeller(),
                rechargeDTO.getAmont()
        );

        repository.save(recharge);
    }

}
