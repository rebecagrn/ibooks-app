import React from 'react';
import NavBar from '../../components/NavBar';
import Container from '../../components/Container';
import { Title } from '../Main';
import { MainTitle } from '../Main/styles';

function Details({ match }) {
  const bookId = match.params.id;
  return (
    <>
      <NavBar />
      <Container>
        <MainTitle>
          <Title text="Detalhes do Livro" />
        </MainTitle>
        <p>
          <strong>Título:</strong>
        </p>
        <p>
          <strong>Subtítulo:</strong>
        </p>
        <p>
          <strong>Descrição:</strong>
        </p>
        <strong>ID:</strong> <span>{bookId}</span>
      </Container>
    </>
  );
}

export default Details;
