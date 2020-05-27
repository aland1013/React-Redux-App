import React from 'react';
import Container from '@material-ui/core/Container';
import Cubs from './components/Cubs';
import { Typography } from '@material-ui/core';

const App = () => {
  return (
    <Container maxWidth='md' justify='center'>
      <Typography align='center' variant='h3' gutterBottom>
        React-Redux Project
      </Typography>
      <Cubs />
    </Container>
  );
};

export default App;
