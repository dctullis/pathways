package com.fse.entity;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "companydetails")
public class CompanyDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id; 

    @Column(name="company_code")
    private String companyCode;

    @Column(name="stock_price")
    private Double stockPrice;

    @Column(name="stock_price_date_time")
    private LocalDateTime stockPriceDateTime;

    public CompanyDetails(String companyCode, Double stockPrice, LocalDateTime stockPriceDateTime) {
        this.companyCode = companyCode;
        this.stockPrice = stockPrice;
        this.stockPriceDateTime = stockPriceDateTime;
    }

}
