import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import { GlobalContext } from '../../context/GlobalState';
import NavBar from '../../components/NavBar';
import Container from '../../components/Container';
import { Title } from '../Main';
import { MainTitle, BookCard } from '../Main/styles';
import { FavoriteCard } from './styles';
import { ButtonDefault } from '../../components/ButtonDefault/styles';
import cat from '../../assets/img/zelda_thecat.jpg';

function Favorites() {
  const { favorite } = useContext(GlobalContext);
  return (
    <>
      <NavBar />
      <Container>
        <MainTitle>
          <Title text="Favoritos" />
        </MainTitle>

        {favorite.length > 0 ? (
          <FavoriteCard>
            {favorite.map((book) => (
              <div key={uuid()} type="favorite" className="favorite-card-item">
                <BookCard>
                  <Link to={`/details/${book.id}/`}>
                    <img
                      className="img-thumbnail"
                      src={
                        book.volumeInfo.imageLinks === undefined
                          ? `${cat}`
                          : `${book.volumeInfo.imageLinks.thumbnail}`
                      }
                      alt={book.volumeInfo.title}
                    />
                  </Link>
                  <div className="card-text">
                    <h3>
                      <strong>Título</strong>: {book.volumeInfo.title}
                    </h3>
                    <p>
                      <strong>Autor</strong>: {book.volumeInfo.authors}
                    </p>
                  </div>
                </BookCard>
              </div>
            ))}
          </FavoriteCard>
        ) : (
          <h3>Não há livros nos favoritos.</h3>
        )}
        <ButtonDefault>
          <Link to="/">Back to home</Link>
        </ButtonDefault>
      </Container>
    </>
  );
}

export default Favorites;
