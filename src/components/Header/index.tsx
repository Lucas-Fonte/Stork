/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Container, HeaderMenu, IconContainer } from './styles';

const logo = require('../../assets/logo.png');

export default function Header() {
  const [statusMenu, setStatusMenu] = useState(false);

  const handleMenu = (statusMenu: boolean) => { 
    return (statusMenu ? setStatusMenu(false) : setStatusMenu(true))
  };
  
  return (
    <Container>
      <a href=".">
        <img src={logo} alt="Stork" width="100" height="110" />
      </a>
      <HeaderMenu>
        <IconContainer opacity={statusMenu}>          
          <FaPlus style={{ fontSize: 18 }} onClick={() => handleMenu(statusMenu)} />
        </IconContainer>
      </HeaderMenu>
    </Container>
  );
}
