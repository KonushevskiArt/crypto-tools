import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { editCurrencyName } from '../../currencySlice';
import { useDispatch } from "react-redux";

const CurrencyNameEditor = ({ currencyName }) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [name, setName] = React.useState(currencyName);
  const dispatch = useDispatch()

  const [validationError, setValidationError] = React.useState(false);
  const [validationMessage, setValidationMessage] = React.useState(null);
  
  const handleChange = (e) => {
    setName(e.target.value);
    setValidationError(false);
    setValidationMessage(null);
  }
  
  const handleSave = (evt) => {
    evt.stopPropagation()
    evt.preventDefault()
    const trimmedName = name.trim();
    if (trimmedName.length > 20) {
      setValidationError(true);
      setValidationMessage('Max length 20 characters');
    } else if (trimmedName.length < 1) {
      setValidationError(true);
      setValidationMessage('The field is required');

    } else if (currencyName === trimmedName) {
      setIsEdit(false);
    } else {
      dispatch(editCurrencyName({ newName: name, oldName: currencyName }))
      setIsEdit(false);
    }

  }
  const handleEdit = (evt) => {
    evt.stopPropagation()
    evt.preventDefault()
    setIsEdit(true);
  }

  return (
  (<Box sx={{"display": 'flex', 'alignItems': 'center', 'justifyContent': 'space-between'}}>
 {
  isEdit 
  ?
  <>
    <form >
      <Box sx={{"display": 'flex', 'alignItems': 'center', 'justifyContent': 'space-between'}}>
        <TextField 
            size='small' 
            id="outlined-basic" 
            label="Name" 
            variant="outlined" 
            onChange={handleChange}
            onClick={(e) => e.stopPropagation()}
            sx={{marginRight: '40px'}}
            defaultValue={currencyName}
            error={validationError}
            helperText={validationError ? validationMessage : null}
          />
          <Button 
            type="submit"
            variant="outlined"
            size="small"
            onClick={handleSave}
          >
            Save
          </Button>
      </Box>
    </form>
  </>
  :
  <>
    <Typography mr='40px' >{currencyName}</Typography>
    <Button 
      variant="outlined"
      size="small"
      type="button"
      onClick={handleEdit}
    >
      Edit
    </Button>
  </>
}
</Box>)
  );
};


export default CurrencyNameEditor;
