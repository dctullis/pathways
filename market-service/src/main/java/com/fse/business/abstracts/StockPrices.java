package com.fse.business.abstracts;

import java.util.List;

import com.fse.entity.CompanyDetails;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StockPrices {
    List<CompanyDetails> companyDetails;
}
