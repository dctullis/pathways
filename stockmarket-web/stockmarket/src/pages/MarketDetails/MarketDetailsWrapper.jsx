import React from "react";
import MarketDetails from "./MarketDetails";
import MarketBar from "./MarketBar";
import "./MarketDetailsWrapper.scss";
import { Grid } from "@mui/material";

const MarketDetailsWrapper = () => {
  return (
    <div className={"image"}>
      <Grid sx={{ placeItems: "center", gap: "10px" }} container>
        <Grid item xs={2}>
          <MarketBar />
        </Grid>
        <Grid item xs={8}>
          <MarketDetails />
        </Grid>
      </Grid>
    </div>
  );
};

export default MarketDetailsWrapper;
