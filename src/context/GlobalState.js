import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
  favorite: localStorage.getItem('favorite')
    ? JSON.parse(localStorage.getItem('favorite'))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(state.favorite));
  }, [state]);

  // actions
  const addBookToFavorite = (book) => {
    dispatch({ type: 'ADD_BOOK_TO_FAVORITE', payload: book });
  };

  return (
    <GlobalContext.Provider
      value={{ favorite: state.favorite, addBookToFavorite }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
