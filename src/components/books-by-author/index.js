import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../providers/data-context';
import authorAsTitle from './logic/author-as-title';
import formatBooksAuthor from './logic/format-books-author';
import StyledBooksByAuthor from './styles';

const BooksByAuthor = ({ author, maxBooks }) => {
  const [books, setBooks] = useState([]);
  const { setTextSearch } = useContext(DataContext);

  const viewMore = () => {
    setTextSearch(author.toUpperCase());
  };

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&maxResults=${maxBooks}&langRestric=pt-BR&orderBy=relevance`
    )
      .then((response) => response.json())
      .then(({ items }) => setBooks(items));
  }, []);

  return (
    <StyledBooksByAuthor key={authorAsTitle(books)}>
      <header>
        <StyledBooksByAuthor.Title>
          {authorAsTitle(books)}
        </StyledBooksByAuthor.Title>
      </header>

      <StyledBooksByAuthor.Ul>
        {formatBooksAuthor(books)}
      </StyledBooksByAuthor.Ul>

      <StyledBooksByAuthor.Footer>
        <StyledBooksByAuthor.More onClick={viewMore}>
          Ver mais
        </StyledBooksByAuthor.More>
      </StyledBooksByAuthor.Footer>
    </StyledBooksByAuthor>
  );
};

export default BooksByAuthor;
