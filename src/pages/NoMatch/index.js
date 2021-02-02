import React from 'react';
import NavBar from '../../components/NavBar';
import Container from '../../components/Container';
import ButtonDefault from '../../components/ButtonDefault';
import { Title } from '../Main';

function NoMatch() {
  return (
    <>
      <NavBar />
      <ButtonDefault />
      <Container>
        <Title text="404 - Page Not Found" />
      </Container>
    </>
  );
}

export default NoMatch;
