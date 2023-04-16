import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import AppRouter from "../../routes/AppRouter"

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <AppRouter/>
    </>
  )
}

export default MainLayout