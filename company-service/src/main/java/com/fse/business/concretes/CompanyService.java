package com.fse.business.concretes;


import org.springframework.stereotype.Service;

import com.fse.business.abstracts.RegisterCompanyRequest;


@Service
public class CompanyService {
	public boolean validation(RegisterCompanyRequest request){
		return !(request.getCompanyName().isBlank() 
		|| request.getCompanyCEO().isBlank() 
		|| request.getCompanyWebsite().isBlank() 
		|| request.getListedStockExchange().isBlank()
		|| request.getCompanyTurnover() < 1260000);
	}
}
