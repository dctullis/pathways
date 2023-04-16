package com.fse.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fse.business.abstracts.StockPrices;
import com.fse.business.concretes.MarketService;
import com.fse.utils.ApplicationConstants;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class MarketController {

    @Autowired
    private MarketService marketService;

    @GetMapping("/get/{companycode}/{startdate}/{enddate}")
	public ResponseEntity<StockPrices> findByCompanyAndDate(@PathVariable String companycode, @PathVariable String startdate, @PathVariable String enddate) {
		log.info("Request to: findByCompanyAndDate");
		return new ResponseEntity<>(marketService.getStockPrices(companycode, startdate, enddate), HttpStatus.OK);
	}

    @PostMapping("/add/{companycode}")
	public ResponseEntity<String> addStockPrice(@PathVariable String companycode, @RequestBody String stockprice) {
		log.info("Request to: addStockPrice");
        marketService.saveStockPrice(companycode, Double.parseDouble(stockprice.substring(0, stockprice.length() - 1)));
		return new ResponseEntity<>("Saved", HttpStatus.OK);
	}

	@DeleteMapping("/delete/{companyCode}")
	public ResponseEntity<HttpStatus> deleteSpecificCompanyEntry(@PathVariable("companyCode") String companyCode) {
		log.info("Request to: deleteSpecificCompanyEntry");
		marketService.deleteById(companyCode);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
