import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useNavigate } from "react-router-dom";

const NavDrawer = () => {
  const [open, setOpen] = useState(false);
  const nav = useNavigate();

  return (
    <div>
      <Drawer
        PaperProps={{
          sx: { backgroundColor: "#2B2B2B" },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          <ListItemButton
            data-testid="homeButton"
            onClick={() => {
              setOpen(!open);
              nav("/");
            }}
            divider
          >
            <ListItemIcon>
              <ListItemText sx={{ color: "#F4F4F4" }}>Home</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            data-testid="addCompanyButton"
            onClick={() => {
              setOpen(!open);
              nav("/add");
            }}
            divider
          >
            <ListItemIcon>
              <ListItemText sx={{ color: "#F4F4F4" }}>Add Company</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            data-testid="listCompanyButton"
            onClick={() => {
              setOpen(!open);
              nav("/list");
            }}
            divider
          >
            <ListItemIcon>
              <ListItemText sx={{ color: "#F4F4F4" }}>
                List All Companies
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        data-testid="openButton"
        sx={{ marginLeft: "auto", color: "#FFB606" }}
        onClick={() => setOpen(!open)}
      >
        <MenuRoundedIcon />
      </IconButton>
    </div>
  );
};

export default NavDrawer;
