import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { ButtonDefault } from '../../components/ButtonDefault/styles';
import Container from '../../components/Container';
import { Title } from '../Main';

function NoMatch() {
  return (
    <>
      <NavBar />
      <ButtonDefault>
        <Link to="/">Back to home</Link>
      </ButtonDefault>
      <Container>
        <Title text="404 - Page Not Found" />
      </Container>
    </>
  );
}

export default NoMatch;
