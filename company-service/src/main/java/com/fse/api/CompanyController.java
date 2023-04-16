package com.fse.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fse.business.abstracts.RegisterCompanyRequest;
import com.fse.business.concretes.CompanyService;
import com.fse.dataAccess.CompanyDAO;
import com.fse.entity.Company;
import com.fse.utils.ApplicationConstants;

import lombok.extern.slf4j.Slf4j;


@RestController
@Slf4j
public class CompanyController {

    @Autowired
    CompanyDAO repo;

	@Autowired
	CompanyService companyService;
	
	@GetMapping("/getall")
	public ResponseEntity<List<Company>> findAll() {
		log.info("Request to: findAll");
		return new ResponseEntity<>(repo.findAll(), HttpStatus.OK);
	}

    @GetMapping("/info/{companyCode}")
	public ResponseEntity<Company> findSpecificCompany(@PathVariable("companyCode") String companyCode) {
		log.info("Request to: findSpecificCompany");
		return new ResponseEntity<>(repo.findByCompanyCode(companyCode), HttpStatus.OK);
	}

	@DeleteMapping("/delete/{companyCode}")
	public ResponseEntity<String> deleteSpecificCompany(@PathVariable("companyCode") String companyCode) {
		log.info("Request to: deleteSpecificCompany");
		repo.deleteById(companyCode);
		return new ResponseEntity<>("Company Deleted Successfully", HttpStatus.OK);
	}

    @PostMapping("/register")
	public ResponseEntity<String> registerCompany(@RequestBody RegisterCompanyRequest request) {
		log.info("Request to: registerCompany");

		Company prexistingCompany = repo.findByCompanyCode(request.getCompanyCode());

		if(companyService.validation(request) && !prexistingCompany.getCompanyCode().equals(request.getCompanyCode())){
			repo.save(new Company(request.getCompanyCode(), request.getCompanyName(), request.getCompanyCEO(), request.getCompanyTurnover(), request.getCompanyWebsite(), request.getListedStockExchange()));
			log.info("Company Saved Successfully");
			return new ResponseEntity<>("Company " + request.getCompanyName() + " has been registered.", HttpStatus.OK);
		} else {
			log.info("Error: The company was missing field(s) or had a turnover that was too low to register.");
			return new ResponseEntity<>("Error: Company " + request.getCompanyName() + " has not been registered - the turnover was too low to register or it has the same id as another company.", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
