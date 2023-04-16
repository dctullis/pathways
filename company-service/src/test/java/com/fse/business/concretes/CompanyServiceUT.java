package com.fse.business.concretes;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;

import com.fse.business.abstracts.RegisterCompanyRequest;


import lombok.extern.slf4j.Slf4j;

@ExtendWith(MockitoExtension.class)
@SpringBootTest
@ContextConfiguration(classes = { CompanyService.class })
@Slf4j
public class CompanyServiceUT {

    @Autowired
    CompanyService companyService;

       
        @Test
        void canValidate() throws Exception {
                companyService = new CompanyService();
                RegisterCompanyRequest request = new RegisterCompanyRequest();
                request.setCompanyCEO("ceo");
                request.setCompanyName("name");
                request.setListedStockExchange("nasdaq");
                request.setCompanyWebsite("www.website.com");
                request.setCompanyTurnover(Long.valueOf("1260001"));

                assertTrue(companyService.validation(request));
                           
        }

        @Test
        void canValidateFalseWithNoStockExchange() throws Exception {
                companyService = new CompanyService();
                RegisterCompanyRequest request = new RegisterCompanyRequest();
                request.setCompanyCEO("ceo");
                request.setCompanyName("name");
                request.setListedStockExchange("");
                request.setCompanyWebsite("www.website.com");
                request.setCompanyTurnover(Long.valueOf("1260001"));

                assertFalse(companyService.validation(request));
                           
        }

        @Test
        void canValidateFalseWithFailedTurnover() throws Exception {
                companyService = new CompanyService();
                RegisterCompanyRequest request = new RegisterCompanyRequest();
                request.setCompanyCEO("ceo");
                request.setCompanyName("name");
                request.setListedStockExchange("nasdaq");
                request.setCompanyWebsite("www.website.com");
                request.setCompanyTurnover(Long.valueOf("2"));

                assertFalse(companyService.validation(request));
                           
        }

        @Test
        void canValidateFalseWithEmptyCompanyName() throws Exception {
                companyService = new CompanyService();
                RegisterCompanyRequest request = new RegisterCompanyRequest();
                request.setCompanyCEO("ceo");
                request.setCompanyName("");
                request.setListedStockExchange("nasdaq");
                request.setCompanyWebsite("www.website.com");
                request.setCompanyTurnover(Long.valueOf("12600"));

                assertFalse(companyService.validation(request));
                           
        }

        @Test
        void canValidateFalseWithEmptyCompanyCEO() throws Exception {
                companyService = new CompanyService();
                RegisterCompanyRequest request = new RegisterCompanyRequest();
                request.setCompanyCEO("");
                request.setCompanyName("name");
                request.setListedStockExchange("nasdaq");
                request.setCompanyWebsite("www.website.com");
                request.setCompanyTurnover(Long.valueOf("12600"));

                assertFalse(companyService.validation(request));
                           
        }

        @Test
        void canValidateFalseWithNoWebsite() throws Exception {
                companyService = new CompanyService();
                RegisterCompanyRequest request = new RegisterCompanyRequest();
                request.setCompanyCEO("ceo");
                request.setCompanyName("name");
                request.setListedStockExchange("nasdaq");
                request.setCompanyWebsite("");
                request.setCompanyTurnover(Long.valueOf("12600"));

                assertFalse(companyService.validation(request));
                           
        }

        

}
