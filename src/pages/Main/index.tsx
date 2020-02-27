import React from 'react';
import Header from '../../components/Header';
import InterestRateCalculator from '../../components/InterestRateCalculator';
import Footer from '../../components/Footer';
import { Content } from './styles';

export default function Main() {
  return (

    <Content>
      <Header />
      <InterestRateCalculator />
      <Footer />
    </Content>

  );
}
