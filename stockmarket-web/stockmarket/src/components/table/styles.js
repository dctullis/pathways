import { styled } from "@mui/material/styles";
import {TableRow, TableHead, Paper, TableCell, tableCellClasses} from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  borderTopLeftRadius: '0px',
  borderBottomLeftRadius: '0px',
  borderTopRightRadius: '0px',
  borderBottomRightRadius: '0px',
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const StyledTableHead = styled(TableHead)(({ theme } ) => ({
    "&:th": {
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px',
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
    }
}))
