import { lazy, Suspense } from 'react';
import Loading from '../../utils/loading';
import StyledBooks from './styles/styled-books';

const ViewerByAuthor = lazy(() => import('../viewer-author'));

const BooksContent = () => (
  <StyledBooks>
    <StyledBooks.Title>Livros por Autor</StyledBooks.Title>
    <Suspense fallback={<Loading />}>
      <section>
        <ViewerByAuthor author='jung' maxBooks='4' />
        <ViewerByAuthor author='freud' maxBooks='4' />
        <ViewerByAuthor author='descartes' maxBooks='4' />
        <ViewerByAuthor author='kant' maxBooks='4' />
      </section>
    </Suspense>
  </StyledBooks>
);

export default BooksContent;
