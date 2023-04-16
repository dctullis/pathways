import { styled } from "@mui/material/styles";
import { InputLabel, Select, TextField } from "@mui/material";

export const Dropdown = styled(Select)(() => ({
  backgroundColor: "#3B3B3B",
  marginLeft: "5vw",
  "&label.Mui-focused": {
    color: "white",
  },
  "&.MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#1C1C1C",
    },
  },
}));

export const Field = styled(TextField)(() => ({
  borderRadius: '5px',
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  marginTop: "2vh",
  backgroundColor: "#3B3B3B",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#1C1C1C",
    },
    "&:hover fieldset": {
      borderColor: "#1C1C1C",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FFB606",
    },
  },
  "& label.Mui-focused": {
    color: "#FFB606",
  },
  "& label": {
    color: "#FFB606",
  },
}));

export const MUILabel = styled(InputLabel)(() => ({
  marginLeft: "5vw",
  "&.MuiInputLabel-root": {
    color: " #FFB606",
  },
}));
