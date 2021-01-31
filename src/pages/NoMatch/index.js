import React from 'react';
import NavBar from '../../components/NavBar';
import Container from '../../components/Container';
import { Title } from '../Main';

function NoMatch() {
  return (
    <>
      <NavBar />
      <Container>
        <Title text="404 - Page Not Found" />
      </Container>
    </>
  );
}

export default NoMatch;
