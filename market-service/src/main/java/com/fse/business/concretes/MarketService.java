package com.fse.business.concretes;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fse.business.abstracts.StockPrices;
import com.fse.dataAccess.CompanyDetailsDAO;
import com.fse.entity.CompanyDetails;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class MarketService {

    @Autowired
    private CompanyDetailsDAO repo;

    public StockPrices getStockPrices(String companycode, String startdate, String enddate) {
        StockPrices stockPrices = new StockPrices();
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        List<CompanyDetails> companyDetails = repo.findStockPricesByDate(
            companycode, 
            LocalDateTime.of(LocalDate.parse(startdate, dateFormatter), LocalDateTime.now().toLocalTime()), 
            LocalDateTime.of(LocalDate.parse(enddate, dateFormatter), LocalDateTime.now().toLocalTime())
            );
        for(CompanyDetails det : companyDetails) {
            log.info(det.getStockPriceDateTime().toString());
        }
        stockPrices.setCompanyDetails(companyDetails);
        log.info(stockPrices.toString());
        return stockPrices;
    }

    public void deleteById(String companycode) {
        repo.deleteById(companycode);
    }

    public void saveStockPrice(String companycode, Double stockprice) {
        repo.save(new CompanyDetails(companycode, stockprice, LocalDateTime.now()));
    }
    
}
