import React, { useContext } from 'react';
import uuid from 'react-uuid';
import { GlobalContext } from '../../context/GlobalState';
import NavBar from '../../components/NavBar';
import Container from '../../components/Container';
import { MainTitle, BookCard } from '../Main/styles';

function Favorites() {
  const { favorite } = useContext(GlobalContext);
  return (
    <>
      <NavBar />
      <Container>
        <MainTitle>
          <h1>Favoritos</h1>
        </MainTitle>

        {favorite.length > 0 ? (
          <>
            {favorite.map((book) => (
              <div
                key={uuid()}
                type="favorite"
                style={{
                  padding: '20px',
                  border: '1px solid #f4f4f4',
                  borderRadius: '4px',
                  margin: '15px',
                }}
              >
                <BookCard>
                  <img
                    className="img-thumbnail"
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                  />
                  <div className="card-text">
                    <h3>
                      <strong>Título</strong>: {book.volumeInfo.title}
                    </h3>
                    <p>
                      <strong>Subtítulo</strong>: {book.volumeInfo.subtitle}
                    </p>
                    <p>
                      <strong>Autor</strong>: {book.volumeInfo.authors}
                    </p>
                  </div>
                </BookCard>
              </div>
            ))}
          </>
        ) : (
          <h3>Não há livros nos favoritos.</h3>
        )}
      </Container>
    </>
  );
}

export default Favorites;
