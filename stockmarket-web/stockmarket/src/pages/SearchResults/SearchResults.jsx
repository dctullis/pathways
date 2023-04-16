import React, {useState} from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchResults.scss";
import { SearchField } from "../../components/navbar/styles";

const SearchBar = (props) => {

    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
        props.onSearch(e.target.value.toLowerCase());
        props.anchor(e.currentTarget)
    }

  return (
    <div className={"page"}>
        <SearchField
          id="outlined-adornment-amount"
          onChange={(e) => handleChange(e)}
          value={value}
          startAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
    </div>
  );
};

export default SearchBar;
