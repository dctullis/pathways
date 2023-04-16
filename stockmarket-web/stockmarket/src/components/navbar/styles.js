import { Button, styled, Input } from "@mui/material"


export const StyledButton = styled(Button)(() => ({
        backgroundColor: 'rgba(255, 182, 6, 1)',
        color: 'white',
        marginLeft: 5,
        '&:hover': {
          backgroundColor: '#B28228',
          color: 'white',
  }}));

export const SearchField = styled(Input)(() => ({
    backgroundColor: '#86868B',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
    marginLeft: '8vw',    
}))

