import { useEffect, useState } from 'react';
import StyledViewerByAuthor from '../styles/styled-viewer-by-author';
import {
  isExistAuthor,
  isExistPrice,
  isExistThumbnail,
  isExistTitle
} from './books-is-valid';

const formatBooksAuthor = (author, maxBooks) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&maxResults=${maxBooks}&langRestric=pt-BR&orderBy=relevance`
    )
      .then((response) => response.json())
      .then(({ items }) => setBooks(items));
  }, []);

  const booksFormated = books.map((book) => (
    <StyledViewerByAuthor.Item key={book.id}>
      <StyledViewerByAuthor.BookLink href={`/detail/${book.id}`}>
        <StyledViewerByAuthor.BookContainer>
          <StyledViewerByAuthor.BookImg
            height='192'
            width='128'
            src={`${isExistThumbnail(book)}`}
            alt={`capa do livro, ${isExistTitle(book)}`}
          />
          <StyledViewerByAuthor.BookTitle>
            {`${isExistTitle(book)}`}
          </StyledViewerByAuthor.BookTitle>
          <StyledViewerByAuthor.BookAuthor>
            {`${isExistAuthor(book)}`}
          </StyledViewerByAuthor.BookAuthor>
          <StyledViewerByAuthor.BookPrice>
            {isExistPrice(book)}
          </StyledViewerByAuthor.BookPrice>
        </StyledViewerByAuthor.BookContainer>
      </StyledViewerByAuthor.BookLink>
    </StyledViewerByAuthor.Item>
  ));

  return booksFormated;
};

export default formatBooksAuthor;
