import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import InterestRateCalculator from './components/InterestRateCalculator';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <InterestRateCalculator />
      <Footer />
    </>
  );
}

export default App;
