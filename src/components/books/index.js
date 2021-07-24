import ViewerByAuthor from '../viewer-author';
import StyledBooks from './styles/styled-books';

const BooksContent = () => (
  <StyledBooks>
    <StyledBooks.Title>Livros por Autor</StyledBooks.Title>
    <section>
      <ViewerByAuthor author='jung' maxBooks='4' />
      <ViewerByAuthor author='freud' maxBooks='4' />
      <ViewerByAuthor author='descartes' maxBooks='4' />
      <ViewerByAuthor author='kant' maxBooks='4' />
    </section>
  </StyledBooks>
);

export default BooksContent;
