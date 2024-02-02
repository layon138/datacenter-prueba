package com.cryptogramming.apirest.service;

import com.cryptogramming.apirest.dto.RechargeDTO;
import com.cryptogramming.apirest.repository.RechargeRepository;
import com.cryptogramming.apirest.domain.Recharge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public  class RechargeService  {

    @Autowired
    RechargeRepository repository;

    public List<Recharge> getAllRecharges() {
        return repository.findAll();
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
