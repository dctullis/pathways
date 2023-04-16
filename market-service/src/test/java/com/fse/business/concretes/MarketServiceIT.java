package com.fse.business.concretes;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.Test;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ContextConfiguration;

import com.fse.business.abstracts.StockPrices;
import com.fse.dataAccess.CompanyDetailsDAO;
import com.fse.entity.CompanyDetails;

import lombok.extern.slf4j.Slf4j;

@ExtendWith(MockitoExtension.class)
@SpringBootTest
@ContextConfiguration(classes = { MarketService.class })
@Slf4j
public class MarketServiceIT {

    @MockBean
    private CompanyDetailsDAO companyDetailsDAO;

    @Autowired
    private MarketService marketService;

    @Test
    public void getStockPrices_ShouldReturn() throws Exception {
        List<CompanyDetails> companyDetailsList = new ArrayList<>();
        CompanyDetails companyDetails = new CompanyDetails("000", 13.0, LocalDateTime.now());
        companyDetailsList.add(companyDetails);

        when(companyDetailsDAO.findStockPricesByDate(any(), any(), any())).thenReturn(companyDetailsList);

        StockPrices prices = marketService.getStockPrices("000", "2000-01-01", "2020-04-05");
        assertEquals("000", prices.getCompanyDetails().get(0).getCompanyCode());

    }

    @Test
    public void givenCompanyCode_whenDeleteCompany_thenNothing() {
        String companyCode = "1L";

        doNothing().when(companyDetailsDAO).deleteById(companyCode);
        marketService.deleteById(companyCode);

        verify(companyDetailsDAO, times(1)).deleteById(companyCode);
    }

    @Test
    public void givenCompanyCodeAndStockPrice_whenSaveStockPrice_thenNothing() {
        String companyCode = "1L";
        Double stockPrice = 13.0;

        marketService.saveStockPrice(companyCode, stockPrice);

        verify(companyDetailsDAO, times(1)).save(new CompanyDetails(companyCode, stockPrice, any()));
    }

}
