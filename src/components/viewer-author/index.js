import { useEffect, useState } from 'react';
import StyledViewerByAuthor from './styles/styled-viewer-by-author';

import booksAuthorTitle from './logic/books-author';
import formatBooksAuthor from './logic/format-books-author';

const ViewerByAuthor = ({ author, maxBooks }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&maxResults=${maxBooks}&langRestric=pt-BR&orderBy=relevance`
    )
      .then((response) => response.json())
      .then(({ items }) => setBooks(items));
  }, []);

  return (
    <StyledViewerByAuthor key={booksAuthorTitle(books)}>
      <header>
        <StyledViewerByAuthor.Title>
          {booksAuthorTitle(books)}
        </StyledViewerByAuthor.Title>
      </header>

      <StyledViewerByAuthor.BooksList>
        {formatBooksAuthor(books)}
      </StyledViewerByAuthor.BooksList>

      <footer>
        <StyledViewerByAuthor.More>Ver mais</StyledViewerByAuthor.More>
      </footer>
    </StyledViewerByAuthor>
  );
};

export default ViewerByAuthor;
