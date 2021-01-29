import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import NavBar from '../../components/NavBar';
import Container from '../../components/Container';
import { MainTitle, BookCard, CardFooter } from '../Main/styles';

function Favorites() {
  const { favorite } = useContext(GlobalContext);
  return (
    <>
      <NavBar />
      <Container>
        <MainTitle>
          <h1>Favoritos</h1>
        </MainTitle>
        <>
          {favorite.map((book) => (
            <div
              key={book.id}
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
                  <CardFooter>
                    <h3>{book.saleInfo.buyLink}</h3>
                  </CardFooter>
                </div>
              </BookCard>
            </div>
          ))}
        </>
      </Container>
    </>
  );
}

export default Favorites;
