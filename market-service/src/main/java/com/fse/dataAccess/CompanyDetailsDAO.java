package com.fse.dataAccess;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;

import com.fse.entity.CompanyDetails;
 
public interface CompanyDetailsDAO extends JpaRepository<CompanyDetails, Integer> {
    @Query(value = "SELECT * FROM companydetails u WHERE u.company_code = ?1 AND u.stock_price_date_time >= ?2 AND u.stock_price_date_time <= ?3", nativeQuery = true)
    List<CompanyDetails> findStockPricesByDate(String companyCode, LocalDateTime startDate, LocalDateTime endDate);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM companydetails u WHERE u.company_code = ?1", nativeQuery = true)
    void deleteById(String companyCode);

}
