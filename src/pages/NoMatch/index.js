import React from 'react';
import NavBar from '../../components/NavBar';
import Container from '../../components/Container';

function NoMatch() {
  return (
    <>
      <NavBar />
      <Container>
        <h1>404 - Page Not Found</h1>
      </Container>
    </>
  );
}

export default NoMatch;
