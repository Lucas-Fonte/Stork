import React from 'react';
import { Container } from './styles';

import Header from './components/Header';
import InterestRateCalculator from './components/InterestRateCalculator';
import Footer from './components/Footer';

function App() {
  return (
    <Container>
      <Header></Header>
      <InterestRateCalculator></InterestRateCalculator>
      <Footer></Footer>
    </Container>
  );
}

export default App;
