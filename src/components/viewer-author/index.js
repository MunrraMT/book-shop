import StyledViewerByAuthor from './styles/styled-viewer-by-author';
import formatBooksAuthor from './logic/format-books-author';
import booksAuthorTitle from './logic/books-author';

// eslint-disable-next-line react/prop-types
const ViewerByAuthor = ({ author, maxBooks }) => (
  <StyledViewerByAuthor key={booksAuthorTitle(author)}>
    <header>
      <StyledViewerByAuthor.Title>
        {booksAuthorTitle(author)}
      </StyledViewerByAuthor.Title>
    </header>

    <StyledViewerByAuthor.BooksList>
      {formatBooksAuthor(author, maxBooks)}
    </StyledViewerByAuthor.BooksList>

    <footer>
      <StyledViewerByAuthor.More>Ver mais</StyledViewerByAuthor.More>
    </footer>
  </StyledViewerByAuthor>
);

export default ViewerByAuthor;
