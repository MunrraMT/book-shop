import StyledViewerByAuthor from './styles/styled-viewer-by-author';

import booksAuthorTitle from './logic/books-author';
import formatBooksAuthor from './logic/format-books-author';

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
