import { lazy, Suspense } from 'react';
import Loading from '../utils/loading';

const BooksContent = lazy(() => import('../components/books'));

const BooksPage = () => (
  <Suspense fallback={<Loading />}>
    <BooksContent />
  </Suspense>
);

export default BooksPage;
