import ViewerByAuthor from '../viewer-author';

const BooksContent = () => (
  <>
    <ViewerByAuthor author='jung' maxBooks='4' />
    <ViewerByAuthor author='freud' maxBooks='4' />
    <ViewerByAuthor author='descartes' maxBooks='4' />
    <ViewerByAuthor author='kant' maxBooks='4' />
  </>
);

export default BooksContent;
