import React from 'react';

import { Container } from './styles';

const News: React.FC = () => {
  const trends = [
    `INDvNZ: India beat New Zealand by 7 wickets
    Trending with Ranchi, #INDVsNZT20`,
    `Trending in India
    #disappointed
    18.8K Tweets`,
    `#RohitSharma
    10.2K Tweets`,
    `Sushant The Perfect Gentleman
    37.2K Tweets`,
  ];
  return (
    <Container>
      <span>Trending in India</span>
      <strong>{trends[Math.floor(Math.random() * trends.length)]}</strong>
    </Container>
  );
};

export default News;
