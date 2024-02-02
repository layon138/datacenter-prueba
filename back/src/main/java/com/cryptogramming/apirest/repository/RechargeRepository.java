package com.cryptogramming.apirest.repository;


import com.cryptogramming.apirest.domain.Recharge;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface RechargeRepository extends MongoRepository<Recharge, Integer> {

}
