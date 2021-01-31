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
      <Container>
        <Title text="404 - Page Not Found" />
        <ButtonDefault>
          <Link to="/">Back to home</Link>
        </ButtonDefault>
      </Container>
    </>
  );
}

export default NoMatch;
