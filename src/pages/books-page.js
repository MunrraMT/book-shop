import { useContext } from 'react';
import { DataContext } from '../providers/data-context';
import BooksByAuthor from '../components/books-by-author';
import BooksBySearch from '../components/books-by-search';

const BooksPage = () => {
  const { textSearch } = useContext(DataContext);
  const maxBooks = 4;

  return textSearch === '' ? (
    <>
      <BooksByAuthor author='jung' maxBooks={maxBooks} />
      <BooksByAuthor author='freud' maxBooks={maxBooks} />
      <BooksByAuthor author='descartes' maxBooks={maxBooks} />
      <BooksByAuthor author='kant' maxBooks={maxBooks} />
    </>
  ) : (
    <BooksBySearch />
  );
};

export default BooksPage;
