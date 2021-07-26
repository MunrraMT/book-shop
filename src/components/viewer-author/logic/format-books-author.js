import LazyLoad from 'react-lazyload';
import StyledViewerByAuthor from '../styles/styled-viewer-by-author';
import {
  isExistAuthor,
  isExistPrice,
  isExistThumbnail,
  isExistTitle
} from './books-is-valid';
import Loading from '../../../utils/loading';

const formatBooksAuthor = (books) => {
  const booksFormated = () => {
    if (books.length === 0) return <Loading />;

    const booksList = books.map((book) => (
      <StyledViewerByAuthor.Item key={book.id}>
        <StyledViewerByAuthor.BookLink href={`/detail/${book.id}`}>
          <StyledViewerByAuthor.BookContainer>
            <LazyLoad
              once
              scroll
              debounce={200}
              offset={100}
              key={book.id}
              height={50}
              placeholder={<Loading />}
            >
              <StyledViewerByAuthor.BookImg
                height='192'
                width='128'
                src={`${isExistThumbnail(book)}`}
                alt={`capa do livro, ${isExistTitle(book)}`}
              />
            </LazyLoad>
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

    return booksList;
  };

  return booksFormated();
};

export default formatBooksAuthor;
