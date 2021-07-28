import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../providers/data-context';
import randomNumber from '../../utils/random-number';
import authorAsTitle from './logic/author-as-title';
import formatBooksAuthor from './logic/format-books-author';
import StyledBooksByAuthor from './styles';

const BooksByAuthor = ({ author, maxBooks }) => {
  const [books, setBooks] = useState([]);
  const { setTextSearch } = useContext(DataContext);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&maxResults=${maxBooks}&langRestric=pt-BR&orderBy=relevance`
    )
      .then((response) => response.json())
      .then(({ items }) => setBooks(items));
  }, []);

  const viewMore = () => {
    setTextSearch(author.toUpperCase());
  };

  return (
    <StyledBooksByAuthor key={randomNumber()}>
      <header>
        <StyledBooksByAuthor.Title key={randomNumber()}>
          {authorAsTitle(books)}
        </StyledBooksByAuthor.Title>
      </header>

      <StyledBooksByAuthor.Ul key={randomNumber()}>
        {formatBooksAuthor(books)}
      </StyledBooksByAuthor.Ul>

      <StyledBooksByAuthor.Footer key={randomNumber()}>
        <StyledBooksByAuthor.More key={randomNumber()} onClick={viewMore}>
          Ver mais
        </StyledBooksByAuthor.More>
      </StyledBooksByAuthor.Footer>
    </StyledBooksByAuthor>
  );
};

export default BooksByAuthor;
