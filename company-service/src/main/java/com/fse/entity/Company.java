package com.fse.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "company")
public class Company {
	
	@Id
	public String companyCode;
	private String companyName;
	private String companyCEO;
	private Long companyTurnover;
	private String companyWebsite;
	private String listedStockExchange;

}
