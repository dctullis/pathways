package com.fse.api;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.fse.business.concretes.MarketService;
import com.fse.dataAccess.CompanyDetailsDAO;
import com.fse.entity.CompanyDetails;

import java.io.File;
import java.nio.file.Files;

import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;


import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.extern.slf4j.Slf4j;

import com.fse.business.abstracts.StockPrices;

@WebMvcTest(MarketController.class)
@Slf4j
public class MarketControllerUT {

        @Autowired
        private MockMvc mvc;

        @Autowired
        private ObjectMapper objectMapper;

        @Autowired
        private ResourceLoader resourceLoader;

        @MockBean
        private CompanyDetailsDAO repo;

        @MockBean
        private MarketService marketService;


        @Captor
        ArgumentCaptor argumentCaptor;

        @Captor
        ArgumentCaptor<CompanyDetails> requestCaptor;

        @Test
        public void canSaveStockPrice() throws Exception {
                File requestFile = resourceLoader.getResource("classpath:json/addReturn.json").getFile();
                
                mvc.perform(MockMvcRequestBuilders.post("/add/companycode")
                .content(Files.readAllBytes(requestFile.toPath()))
                .contentType(MediaType.APPLICATION_JSON_VALUE)
        )
                .andExpect(status().isOk());
        }

        @Test
        public void canDeleteCompanies() throws Exception {

                doNothing().when(marketService).deleteById(any());

                mvc.perform(MockMvcRequestBuilders.delete("/delete/companyCode"))
                        .andExpect(status().isOk());

                verify(marketService).deleteById((String) argumentCaptor.capture());
                assertEquals("companyCode", argumentCaptor.getValue());

        }

        @Test
        public void canGetStockPrices() throws Exception {
                File responseFile = resourceLoader.getResource("classpath:json/validCompanyReturn.json").getFile();
                StockPrices prices = objectMapper.readValue(responseFile, StockPrices.class);

                when(marketService.getStockPrices(any(), any(), any())).thenReturn(prices);

                mvc.perform(MockMvcRequestBuilders.get("/get/0000/1975-05-05/2004-05-05"))
                        .andExpect(status().isOk())
                        .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
                        .andExpect(jsonPath("$.companyDetails[0].companyCode").value("string"));
        }
}
