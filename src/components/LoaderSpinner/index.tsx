import React from 'react';
import { CircularProgress } from '@material-ui/core';

import { Container } from './styles';

const Loader: React.FC<{ color: string }> = ({ color = '#1da1f2' }) => {
  return (
    <Container className="loader-container">
      <CircularProgress size={15} style={{ color }} />
    </Container>
  );
};
export default Loader;
