import { createContext, useState } from 'react';

const DataContext = createContext({
  textSearch: '',
  favorites: [],
  cart: []
});

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => {
  const [textSearch, setTextSearch] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <DataContext.Provider
      value={{
        textSearch,
        setTextSearch,
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
