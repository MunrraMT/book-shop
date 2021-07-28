import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../providers/data-context';
import BookFormatter from '../book-formatter';
import Loading from '../utils/loading/loading';
import StyledBooksBySearch from './styles';

const BooksBySearch = () => {
  const [booksList, setBooksList] = useState([]);
  const { textSearch } = useContext(DataContext);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${textSearch}&maxResults=40&langRestric=pt-BR&orderBy=relevance`
    )
      .then((response) => response.json())
      .then(({ items }) => setBooksList(items));
  }, [textSearch]);

  return booksList.length === 0 ? (
    <Loading dark />
  ) : (
    <StyledBooksBySearch>
      {booksList.map((book) => (
        <BookFormatter search dark book={book} formattingTemplate='search' />
      ))}
    </StyledBooksBySearch>
  );
};

export default BooksBySearch;
