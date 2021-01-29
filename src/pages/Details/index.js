import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Container from '../../components/Container';
import { ButtonDefault } from './styles';

function Details({ match }) {
  const bookId = match.params.id;
  return (
    <>
      <NavBar />
      <ButtonDefault>
        <Link to="/" className="back-to-home">
          Voltar para Home
        </Link>
      </ButtonDefault>
      <Container>
        <h1>Detalhes do Livro</h1>
        <p>Título:</p>
        <p>Subtítulo:</p>
        <p>Descrição:</p>
        <strong>ID:</strong> <span>{bookId}</span>
      </Container>
    </>
  );
}

export default Details;
