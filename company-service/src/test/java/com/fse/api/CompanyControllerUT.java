package com.fse.api;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.io.File;
import java.nio.file.Files;
import java.util.List;

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
import com.fse.business.concretes.CompanyService;
import com.fse.dataAccess.CompanyDAO;
import com.fse.entity.Company;

import lombok.extern.slf4j.Slf4j;

@WebMvcTest(CompanyController.class)
@Slf4j
class CompanyControllerUT {

        @Autowired
        private MockMvc mvc;

        @Autowired
        private ObjectMapper objectMapper;

        @Autowired
        private ResourceLoader resourceLoader;

        @MockBean
        private CompanyDAO repo;

        @MockBean
        private CompanyService companyService;

        @Captor
        ArgumentCaptor argumentCaptor;

        @Captor
        ArgumentCaptor<Company> requestCaptor;

        @Test
        void canRetrieveByCompanyCodeWhenExists() throws Exception {
                File responseFile = resourceLoader.getResource("classpath:json/companyReturn.json").getFile();
                
                Company company = objectMapper.readValue(responseFile, Company.class);
                when(repo.findByCompanyCode(any())).thenReturn(company);

                mvc.perform(MockMvcRequestBuilders.get("/info/code"))
                        .andExpect(status().isOk())
                        .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
                        .andExpect(jsonPath("$.companyCode").value("code"));
        }

        @Test
        void canRetrieveCompanies() throws Exception {
                File responseFile = resourceLoader.getResource("classpath:json/multipleCompanyReturn.json").getFile();
                List<Company> returnList = objectMapper.readValue(responseFile, List.class);

                when(repo.findAll()).thenReturn(returnList);

                mvc.perform(MockMvcRequestBuilders.get("/getall"))
                        .andExpect(status().isOk())
                        .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
                        .andExpect(jsonPath("$[0].companyCode").value("code"));
        }


        @Test
        void canDeleteCompanies() throws Exception {

                doNothing().when(repo).deleteById(any());

                mvc.perform(MockMvcRequestBuilders.delete("/delete/companyCode"))
                        .andExpect(status().isOk());

                verify(repo).deleteById((String) argumentCaptor.capture());
                assertEquals("companyCode", argumentCaptor.getValue());

        }

        @Test
        void canRegisterCompanies() throws Exception {
                File requestFile = resourceLoader.getResource("classpath:json/registerCompany.json").getFile();
                Company newCompany = new Company();
                newCompany.setCompanyCode("000000000003");

        
                when(companyService.validation(any())).thenReturn(true);
                when(repo.findByCompanyCode(any())).thenReturn(newCompany);

                mvc.perform(MockMvcRequestBuilders.post("/register")
                        .content(Files.readAllBytes(requestFile.toPath()))
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                )
                        .andExpect(status().isOk());

        }

        @Test
        void canRegisterCompanies_fails() throws Exception {
                File requestFile = resourceLoader.getResource("classpath:json/null.json").getFile();
        
                when(companyService.validation(any())).thenReturn(false);

                mvc.perform(MockMvcRequestBuilders.post("/register")
                        .content(Files.readAllBytes(requestFile.toPath()))
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                )
                        .andExpect(status().isInternalServerError());

        }

}
