import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import AddCompany from '../pages/AddCompany/AddCompany'
import Home from '../pages/Home/Home'
import ListCompanies from '../pages/ListCompanies/ListCompanies'
import Error from '../pages/Error/Error'
import MarketDetailsWrapper from '../pages/MarketDetails/MarketDetailsWrapper'
import SearchFilter from 'pages/SearchResults/SearchFilter'



const AppRouter = () => {
  

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddCompany />} />
          <Route path="/list" element={<ListCompanies />} />
          <Route path="/market" element={<MarketDetailsWrapper />} />
          <Route path="/search" element={<SearchFilter />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default AppRouter