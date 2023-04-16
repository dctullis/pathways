import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import {
  Grid,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import logo from "../../assets/pathways_logo2.png";
import AddchartIcon from "@mui/icons-material/Addchart";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import "./Navbar.scss";
import NavDrawer from "./NavDrawer";
import { useNavigate } from "react-router-dom";
import SearchFilter from "pages/SearchResults/SearchFilter";

export default function Navbar() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const nav = useNavigate();

  return (
    <div>
      <AppBar sx={{ background: "#2B2B2B" }}>
        <Toolbar>
          {isMatch ? (
            <>
              <Typography>
                <img className={"logo"} src={logo} />
              </Typography>
              <NavDrawer />
            </>
          ) : (
            <Grid sx={{ placeItems: "center" }} container>
              <Grid item xs={1}>
                <Typography>
                  <img className={"logo"} src={logo} />
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <Tabs
                  indicatorColor="secondary"
                  textColor="inherit"
                  value={value}
                  onChange={(e, val) => setValue(val)}
                >
                  <Tab label={"Home"} onClick={() => nav("/")} val={0} />
                  <Tab
                    icon={<AddchartIcon />}
                    iconPosition="end"
                    label={"Add Company"}
                    onClick={() => nav("/add")}
                    val={1}
                  />
                  <Tab
                    icon={<SsidChartIcon />}
                    iconPosition="end"
                    label={"List All Companies"}
                    onClick={() => nav("/list")}
                    val={2}
                  />
                </Tabs>
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={3} sx={{ marginTop: "-4rem" }}>
                <SearchFilter />
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
