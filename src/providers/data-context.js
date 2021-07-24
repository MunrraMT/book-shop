import { createContext, useState } from 'react';

const DataContext = createContext({
  books: [],
  favorites: [],
  cart: []
});

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <DataContext.Provider
      value={{
        books,
        setBooks,
        favorites,
        setFavorites,
        cart,
        setCart
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
