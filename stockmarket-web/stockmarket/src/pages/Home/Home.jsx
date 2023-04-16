import React from 'react'
import "./Home.scss"
import img from "../../assets/pie_chart.svg"
import logo from "../../assets/pathways_motto2.png"
import {
  Grid,
} from "@mui/material";

const Home = () => {
  return (
    <div className="page">
       <Grid sx={{ placeItems: "center" }} container>
              <Grid item xs={5}>
                <img src={img} alt="welcome page" className="undrawImg" />
              </Grid>
              <Grid item l={4}>
                <img className={"logo"} src={logo} alt="welcome logo"/>
             </Grid>
        </Grid>
    </div>
  )
}

export default Home