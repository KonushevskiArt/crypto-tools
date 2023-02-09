import React from 'react';
import i18next from 'i18next'

import Cookies from 'js-cookie'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  const currentLanguageCode = Cookies.get('i18next') || 'en'

  const [language, setLanguage] = React.useState(currentLanguageCode);

  const handleChange = (event) => {
    setLanguage(event.target.value);
    Cookies.set('i18next', event.target.value)
  };

  return (
    <div>
      <h2>{t('Currency_list')}</h2>
      <Box sx={{ minWidth: 120, position: 'absolute', top: '20px', right: '20px' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{t("Language")}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            label={t("Language")}
            onChange={handleChange}
            size='small'
          >
            <MenuItem 
              onClick={ () => i18next.changeLanguage('ru') }   
              value='ru'>
              {t('Ru')}
            </MenuItem>
            <MenuItem 
              onClick={ () => i18next.changeLanguage('en') }   
              value='en'>
              {t('Eng')}
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Header;