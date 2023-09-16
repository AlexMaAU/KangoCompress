import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import LanguageIcon from '@mui/icons-material/Language';
import logo from '../../assets/logo.png';
import { HeaderContainer, LogoImg, HeaderBox } from '../Styles/Header.styled';

function Header() {
  const [language, setLanguage] = React.useState('chinese');
  const navigate = useNavigate();

  useEffect(() => {
    if (language === 'english') {
      navigate('/');
    }
  }, [language]);

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <HeaderContainer>
      <HeaderBox>
        <LogoImg src={logo} alt="KangoCompress" onClick={handleLogoClick} />
        <Box sx={{ minWidth: 150, display: 'flex', alignItems: 'center', gap: 1 }}>
          <LanguageIcon sx={{ fontSize: 30 }} />
          <FormControl fullWidth>
            <Select
              id="demo-simple-select"
              value={language}
              onChange={handleChange}
              inputProps={{ MenuProps: { disableScrollLock: true } }}
              sx={{ height: 35, width: 100, backgroundColor: 'white', border: 'none' }}
            >
              <MenuItem value="chinese">中文</MenuItem>
              <MenuItem value="english">English</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </HeaderBox>
    </HeaderContainer>
  );
}

export default Header;
