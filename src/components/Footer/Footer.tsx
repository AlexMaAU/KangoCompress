import React from 'react';
import logo from '../../assets/logo.png';
import { FooterContainer } from '../Styles/Footer.styled';

function Footer() {
  return (
    <FooterContainer>
      <img src={logo} alt="logo" />
      <p>© 2023 KangoCompress, All Rights Reserved.</p>
    </FooterContainer>
  );
}

export default Footer;
