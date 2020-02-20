/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { Container } from './styles';

const logo = require('../../assets/logo.png');

export default function Header() {
  return (
    <Container>
      <a href=".">
        <img src={logo} alt="Stork" width="100" height="80" />
        <h1 style={{ marginLeft: 10 }}>Stork</h1>
      </a>
    </Container>
  );
}
