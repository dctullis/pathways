package com.fse.dataAccess;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.fse.entity.Company;

@Repository
public interface CompanyDAO extends MongoRepository<Company, String> {
    public List<Company> findByCompanyName(String companyName);
    public Company findByCompanyCode(String companyCode);
}

