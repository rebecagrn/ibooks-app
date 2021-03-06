import React, { useState, useContext } from 'react';
import { FaSearch, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';
import api from '../../services/http';
import NavBar from '../../components/NavBar';
import Container from '../../components/Container';
import {
  MainTitle,
  Form,
  SubmitButton,
  BookCard,
  CardFooter,
  ReadMore,
} from './styles';
import cat from '../../assets/img/zelda_thecat.jpg';

export const Title = ({ text }) => <h1>{text}</h1>;

function Main() {
  const { addBookToFavorite, favorite } = useContext(GlobalContext);

  const [searchBook, setSearchBook] = useState('');
  const [result, setResult] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = 'AIzaSyBQzHEpacFfXbkBuVY1rXJbOWVrB0_W8Ho';

  function handleInputChange(e) {
    const book = e.target.value;

    setSearchBook(book);
  }

  const getBookByName = (name) =>
    api
      .get(`/volumes?q=${name}&key=${apiKey}&maxResults=40`)
      .then((results) => results.data.items);

  function handleSubmit(e) {
    e.preventDefault();

    getBookByName(searchBook)
      .then((items) => {
        setResult(items);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setResult([]);
      });
  }

  return (
    <>
      <NavBar />
      <Container>
        <MainTitle>
          <Title text="Books" />
        </MainTitle>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchBook}
            onChange={handleInputChange}
          />
          <SubmitButton>
            <FaSearch color="#fff" size={14} />
          </SubmitButton>
        </Form>
        {!error && (
          <BookCard>
            {result.map((book) => {
              const storedBook = favorite.find((obj) => obj.id === book.id);
              const favoriteDisabled = !!storedBook;

              return (
                <div className="card-item" key={book.id}>
                  <Link to={`/details/${book.id}/`}>
                    <img
                      src={
                        book.volumeInfo.imageLinks === undefined
                          ? `${cat}`
                          : `${book.volumeInfo.imageLinks.thumbnail}`
                      }
                      alt={book.volumeInfo.title}
                    />
                  </Link>
                  <CardFooter>
                    <h3>{book.volumeInfo.title}</h3>
                    <p>
                      <strong>Autor:</strong> {book.volumeInfo.authors}
                    </p>
                    <div className="footer-links">
                      <ReadMore>
                        <Link to={`/details/${book.id}/`}>Ver detalhes</Link>
                      </ReadMore>
                      <button
                        className="favorite-btn"
                        type="button"
                        disabled={favoriteDisabled}
                        onClick={() => addBookToFavorite(book)}
                      >
                        <FaHeart color="#fff" size={14} />
                      </button>
                    </div>
                  </CardFooter>
                </div>
              );
            })}
          </BookCard>
        )}
      </Container>
    </>
  );
}

export default Main;
