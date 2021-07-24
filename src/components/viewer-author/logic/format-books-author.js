import { useEffect, useState } from 'react';
import formatPrice from '../../utils/format-price';
import getDataAuthor from '../../utils/get-data-author';
import StyledViewerByAuthor from '../styles/styled-viewer-by-author';

const formatBooksAuthor = (author, maxBooks) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getData() {
      setBooks(await getDataAuthor(author, maxBooks));
    }

    getData();
  }, []);

  const booksFormated = books.map((book) => (
    <StyledViewerByAuthor.BookLink href={`/detail/${book.id}`}>
      <StyledViewerByAuthor.BookContainer>
        <StyledViewerByAuthor.BookImg
          src={`${book.volumeInfo.imageLinks.thumbnail}`}
          alt={`capa do livro, ${book.volumeInfo.title}`}
        />
        <StyledViewerByAuthor.BookTitle>
          {`${book.volumeInfo.title}`}
        </StyledViewerByAuthor.BookTitle>
        <StyledViewerByAuthor.BookAuthor>
          {`${book.volumeInfo.authors[0]}`}
        </StyledViewerByAuthor.BookAuthor>
        <StyledViewerByAuthor.BookPrice>
          {formatPrice(book.saleInfo.listPrice.amount)}
        </StyledViewerByAuthor.BookPrice>
      </StyledViewerByAuthor.BookContainer>
    </StyledViewerByAuthor.BookLink>
  ));

  console.log(booksFormated);

  return booksFormated;
};

export default formatBooksAuthor;
