import { Button, styled, Input, TextField } from "@mui/material"

export const InputField = styled(Input)(() => ({
    backgroundColor: '#86868B',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
}));

export const Dropdown = styled(TextField)(() => ({
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
    backgroundColor: '#86868B',
}));
