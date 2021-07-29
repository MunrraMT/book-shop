import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../providers/data-context';
import randomNumber from '../../utils/random-number';
import BookFormatter from '../book-formatter';
import Loading from '../utils/loading';
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
    <Loading key={randomNumber()} dark />
  ) : (
    <StyledBooksBySearch key={randomNumber()}>
      {booksList.map((book) => (
        <BookFormatter
          key={randomNumber()}
          search
          dark
          book={book}
          formattingTemplate='search'
        />
      ))}
    </StyledBooksBySearch>
  );
};

export default BooksBySearch;
