import ViewerByAuthor from '../viewer-author';
import StyledBooks from './styles/styled-books';

const BooksContent = () => (
  <StyledBooks>
    <StyledBooks.Title>Livros por Autor</StyledBooks.Title>
    <section>
      <ViewerByAuthor />
    </section>
  </StyledBooks>
);

export default BooksContent;
