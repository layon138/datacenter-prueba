package com.cryptogramming.apirest.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RechargeDTO {
    private String id;
    private String operator;
    private String seller;
    private int amont;
}
