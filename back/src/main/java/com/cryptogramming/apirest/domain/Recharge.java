package com.cryptogramming.apirest.domain;


import com.mongodb.lang.NonNull;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;


@Getter
@Setter
@Document(collection = "Recharge")
public class Recharge implements Serializable {

    @Id
    @NonNull
    private String id;
    private String operator;
    private String seller;
    private int amont;


    public Recharge(String id, String operator, String seller, int amont) {
        this.id = id;
        this.operator = operator;
        this.seller = seller;
        this.amont = amont;
    }


}
