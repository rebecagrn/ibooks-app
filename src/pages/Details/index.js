import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/http';
import NavBar from '../../components/NavBar';
import Container from '../../components/Container';
import { Title } from '../Main';
import { MainTitle } from '../Main/styles';
import { CardDetails } from './styles';
import { ButtonDefault } from '../../components/ButtonDefault/styles';

function Details({ match }) {
  const bookId = match.params.id;
  const apiKey = 'AIzaSyBQzHEpacFfXbkBuVY1rXJbOWVrB0_W8Ho';

  const [book, setBook] = useState({});

  const getBookById = async (bookId) => {
    const results = await api.get(`volumes/${bookId}?key=${apiKey}`);
    console.log(results.data.volumeInfo);
    return results.data.volumeInfo;
  };

  useEffect(() => {
    (async () => {
      setBook(await getBookById(bookId));
    })();
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        <MainTitle>
          <Title text="Detalhes do Livro" />
        </MainTitle>
        {/* {book.imageLinks.medium && (
          <img src={book.imageLinks.medium} alt={book.title} />
        )} */}
        <CardDetails>
          <p>
            <strong>Título:</strong> {book.title}
          </p>
          <p>
            <strong>Categoria: {book.categories}</strong>
          </p>
          <p>
            <strong>Descrição: </strong>
            {book.description}
          </p>
          <p>
            <strong>Autor:</strong> {book.authors}
          </p>
          <p>
            <strong>Categoria:</strong> {book.categories}
          </p>
          <strong>Idioma: </strong> <span>{book.language}</span>
        </CardDetails>
        <ButtonDefault>
          <Link to="/">Back to home</Link>
        </ButtonDefault>
      </Container>
    </>
  );
}

export default Details;
