import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import axios from 'axios';
// import api from '../../services/api';

import Container from '../../components/Container';
import { MainTitle, Form, SubmitButton, BookCard } from './styles';

export default function Main() {
  const [book, setBook] = useState('');
  const [result, setResult] = useState([]);
  // const [apiKey, setApiKey] = useState(
  //   'AIzaSyBQzHEpacFfXbkBuVY1rXJbOWVrB0_W8Ho'
  // );

  const apiKey = 'AIzaSyBQzHEpacFfXbkBuVY1rXJbOWVrB0_W8Ho';

  function handleInputChange(event) {
    const book = event.target.value;

    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=10`
      )
      .then((resp) => {
        console.log(resp.data);
        setResult(resp.data.items);
      });
  }

  return (
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
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
          </div>
        ))}
      </BookCard>
    </Container>
  );
}