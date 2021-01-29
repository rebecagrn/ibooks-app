import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import axios from 'axios';
// import ReactPaginate from 'react-paginate';
// import api from '../../services/api';
import Container from '../../components/Container';
import { MainTitle, Form, SubmitButton, BookCard, CardFooter } from './styles';
import NavBar from '../../components/NavBar';
import CardPagination from '../../components/Pagination';
import cat from '../../assets/img/zelda_thecat.jpg';

function Main() {
  const [book, setBook] = useState('');
  const [result, setResult] = useState([]);

  const apiKey = 'AIzaSyBQzHEpacFfXbkBuVY1rXJbOWVrB0_W8Ho';

  function handleInputChange(event) {
    const book = event.target.value;

    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=40`
      )
      .then((resp) => {
        setResult(resp.data.items);
      });
  }

  return (
    <>
      <NavBar />
      <Container>
        <MainTitle>
          <h1>Books</h1>
        </MainTitle>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={book}
            onChange={handleInputChange}
          />
          <SubmitButton>
            <FaSearch color="#fff" size={14} />
          </SubmitButton>
        </Form>
        <BookCard>
          {result.map((book) => (
            <div className="card-item" key={book.id}>
              <a
                href={book.volumeInfo.infoLink}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={
                    book.volumeInfo.imageLinks === undefined
                      ? `${cat}`
                      : `${book.volumeInfo.imageLinks.thumbnail}`
                  }
                  alt={book.volumeInfo.title}
                />
              </a>
              <CardFooter>
                <h3>{book.volumeInfo.title}</h3>
                <p>
                  <strong>Autor:</strong> {book.volumeInfo.authors}
                </p>
                {/* <Link to={`/details/${book.id}`}>Ver mais</Link> */}
              </CardFooter>
            </div>
          ))}
        </BookCard>
        <CardPagination />
      </Container>
    </>
  );
}

export default Main;
