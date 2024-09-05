import * as React from 'react';
import { useState } from 'react'; 
import { useContext } from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import userListContext from './usersListContext';
import Context from './Context'
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
export default function CheckboxesTags() {
  const {userData} = useContext(userListContext) 
  const {handleClick} = useContext(Context)
  function getUniqueTags(userData) {
  
    
    let uniqueTags = userData
      .map(item => item.tags) // return for me an array and this array will be array of arrays [["javaScript","raect"]]
      .reduce((a, b) => a.concat(b), []);  // here concat will merge two arrays into one 
  
    uniqueTags = [...new Set(uniqueTags)]; // Set is a methode that remove the duplicates from the array
  
    return uniqueTags;
  }

//  const handleClick = (e,value) =>{
//       setListClick(value);
//       console.log(listClick);
     
//  }
 
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={getUniqueTags(userData)}
      disableCloseOnSelect
      getOptionLabel={(option) => option} // Adjusted to match the JSON structure
      onChange={handleClick}
      renderOption={(props, option, { selected }) => (
        <li {...props} key={option}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option} {}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Skills" placeholder="Favorites" />
      )}
    />
  );
}

  