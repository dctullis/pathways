package com.fse.business.abstracts;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterCompanyRequest {
	private String companyCode;
    private String companyName;
	private String companyCEO;
	private Long companyTurnover;
	private String companyWebsite;
	private String listedStockExchange;
}
